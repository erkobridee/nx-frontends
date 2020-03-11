/*
  [GitHub] microsoft/azure-pipelines-tasks - Merge coverage reports from multiple runs #10353
  https://github.com/microsoft/azure-pipelines-tasks/issues/10353

  based on:
  [gist] merlosy/merge-cobertura.js
  https://gist.github.com/merlosy/8efabc754985aa6e754a3d5932b1a77d
*/

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const xml2js = require('xml2js');

const { copySync } = require('./fs-toolkit');

//----------------------------------------------------------------------------//

const MESSAGE_PREFIX = '\n[merge cobertura]';

const LOG = (...args) => console.log(MESSAGE_PREFIX, ...args);
const WARN = (...args) => console.warn(MESSAGE_PREFIX, ...args);
const ERROR = (...args) => console.error(MESSAGE_PREFIX, ...args);

//----------------------------------------------------------------------------//
// @begin: file system helpers

/**
 * Find the coverage reports files from the given directory
 *
 * @param {string} rootDir - glob pattern
 */
const findCoverageFiles = rootDir =>
  glob
    .sync('**/*coverage.xml', { cwd: rootDir })
    .map(relativeCoverageFile => path.resolve(rootDir, relativeCoverageFile));

/**
 * Format XML content to JSON
 *
 * @param {string} data XML string convertable to string
 */
const xmlToObject = (data, parserOptions = undefined) => {
  const parser = new xml2js.Parser(parserOptions);
  let parsed;
  parser.parseString(data, (err, result) => {
    if (err) {
      ERROR('!!! Error while parsing', err);
      throw err;
    }
    parsed = result;
  });
  return parsed;
};

/**
 * Get file content as JS object
 *
 * @param {string} fileName
 */
const getFileContent = file => {
  let obj;
  LOG('reading', file);
  const data = fs.readFileSync(file, 'utf-8', err => {
    if (err) {
      ERROR('!!! Error while reading', err);
      throw err;
    }
  });
  obj = xmlToObject(data);
  return obj;
};

/**
 * Build the coverage merged report xml and write the file
 *
 * @param {object} mergedReportsContent
 * @param {string} destFile
 * @param {object} buildOptions
 */
const buildAndWriteDestinationFile = (
  mergedReportsContent,
  destFile,
  buildOptions = undefined
) => {
  const builder = new xml2js.Builder(buildOptions);
  const coverageMergedReportsXmlOutput = builder.buildObject(
    mergedReportsContent
  );
  fs.writeFile(destFile, coverageMergedReportsXmlOutput, err => {
    if (err) {
      ERROR('!!! Error while writing', err);
      throw err;
    }
  });
};

// @end: file system helpers
//----------------------------------------------------------------------------//
// @begin: content helpers

/**
 * Add up the 2 values and returns a string value
 *
 * @param {string} val1
 * @param {string} val2
 */
function addString(val1, val2) {
  return String(parseInt(val1) + parseInt(val2));
}

/**
 * Calcula teh ratio number from two string number values
 *
 * @param {string} num1
 * @param {string} num2
 * @param {number} dec
 */
function ratioString(num1, num2, dec) {
  const num = parseInt(num1) / parseInt(num2);
  return String(Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec));
}

/**
 * Pick best value
 *
 * @param {object} test1
 * @param {object} test2
 */
const best = (test1, test2) => {
  if (
    +test1['$']['line-rate'] >= +test2['$']['line-rate'] &&
    +test1['$']['branch-rate'] >= +test2['$']['branch-rate']
  ) {
    return { ...test1 };
  } else if (
    +test2['$']['line-rate'] >= +test1['$']['line-rate'] &&
    +test2['$']['branch-rate'] >= +test1['$']['branch-rate']
  ) {
    return { ...test2 };
  } else {
    throw new Error(
      `Unable to define *best value* coverage for ${test1['$'].name}`
    );
  }
};

/**
 * Process the array content to get the requested keys
 *
 * @param {array} arr
 * @param  {...any} key
 */
const arrayToKeyedObject = (arr, ...key) => {
  return arr.reduce((acc, item) => {
    return {
      [item[key[0]][key[1]]]: item,
      ...acc
    };
  }, {});
};

// @end: content helpers
//----------------------------------------------------------------------------//
// @begin: merge contents

/**
 * Add prefix for packages, assuming they are inside an "src" folder for each app or lib
 *
 * @param {any[]} packages
 */
const processPackageNames = packages => {
  return packages.map(p => {
    const newPack = { ...p };
    const fileName = newPack.classes[0].class[0]['$'].filename;
    const packagePrefix = fileName
      .substring(0, fileName.indexOf('src'))
      .replace(/\//g, '.');
    if (!newPack['$'].name.startsWith(packagePrefix)) {
      newPack['$'].name = packagePrefix + newPack['$'].name;
    }
    // LOG('-> ', newPack['$'].name);
    return newPack;
  });
};

/**
 * Add prefix for packages, assuming they are inside an "src" folder for each app or lib
 *
 * @param {any[]} packages1
 * @param {any[]} packages2
 */
const filterBestPackages = (packages1, packages2) => {
  const packMap1 = arrayToKeyedObject(
    processPackageNames(packages1),
    '$',
    'name'
  );
  const packMap2 = arrayToKeyedObject(
    processPackageNames(packages2),
    '$',
    'name'
  );

  let obj = {};
  // merge the best
  Object.keys(packMap1).forEach(name => {
    if (packMap2[name]) {
      obj[name] = best(packMap1[name], packMap2[name]);
      delete packMap2[name];
    } else {
      obj[name] = packMap1[name];
    }
  });

  // add remaning tests from packMap2
  obj = { ...obj, ...packMap2 };

  // return results in alpha order
  return Object.values(obj).sort((a, b) => {
    return a['$'].name > b['$'].name ? 1 : b['$'].name > a['$'].name ? -1 : 0;
  });
};

/**
 * Return a report that is a merge from report1 and report2
 *
 * @param {any} report1
 * @param {any} report2
 */
const mergeReportValues = (report1, report2) => {
  let report = { ...report1 };
  report.coverage.$['lines-valid'] = addString(
    report1.coverage.$['lines-valid'],
    report2.coverage.$['lines-valid']
  );
  report.coverage.$['lines-covered'] = addString(
    report1.coverage.$['lines-covered'],
    report2.coverage.$['lines-covered']
  );
  report.coverage.$['line-rate'] = ratioString(
    report1.coverage.$['lines-covered'],
    report1.coverage.$['lines-valid'],
    4
  );
  report.coverage.$['branches-valid'] = addString(
    report1.coverage.$['branches-valid'],
    report2.coverage.$['branches-valid']
  );
  report.coverage.$['branches-covered'] = addString(
    report1.coverage.$['branches-covered'],
    report2.coverage.$['branches-covered']
  );
  report.coverage.$['branch-rate'] = ratioString(
    report1.coverage.$['branches-covered'],
    report1.coverage.$['branches-valid'],
    4
  );

  report.coverage.packages[0] = {
    package: filterBestPackages(
      report1.coverage.packages[0].package,
      report2.coverage.packages[0].package
    )
  };
  report.coverage.$['timestamp'] = Date.now();

  return report;
};

// @end: merge contents
//----------------------------------------------------------------------------//

/**
 * Merge all available cobertura reports from a given directory into a single file
 *
 * @param {string} coverageReportsDir
 * @param {string} coverageMergedFileOutput
 */
const mergeCobertura = (
  coverageReportsDir = './coverage',
  coverageMergedFileOutput = './coverage/cobertura-coverage.xml'
) => {
  coverageMergedFileOutput = path.resolve(coverageMergedFileOutput);

  const coverageFiles = findCoverageFiles(coverageReportsDir);

  LOG('reports from: ', path.resolve(coverageReportsDir));

  if (coverageFiles.length === 0) {
    WARN('there is no reports to be merged');
    return;
  }

  if (coverageFiles.length === 1) {
    LOG('there is only one cobertura report');
    copySync(coverageFiles[0], coverageMergedFileOutput);
    return;
  }

  LOG('reports to merge: ', coverageFiles);

  let reportsContent = coverageFiles.map(getFileContent);

  // TODO: adjust reports contents
  // in case of have only one file
  // and always considere the package from src/ folder

  // LOG('JSON', JSON.stringify(reportsContent, null, 2));

  const firstReportContent = reportsContent[0];
  reportsContent.splice(0, 1);
  const mergedReportContent = reportsContent.reduce(
    mergeReportValues,
    firstReportContent
  );

  LOG('output merged reports to: ', coverageMergedFileOutput);
  buildAndWriteDestinationFile(mergedReportContent, coverageMergedFileOutput, {
    doctype: { sysID: 'http://cobertura.sourceforge.net/xml/coverage-04.dtd' }
  });
};

module.exports = mergeCobertura;
