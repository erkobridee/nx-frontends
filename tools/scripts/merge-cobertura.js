const [
  coverageReportsDir = undefined,
  coverageMergedFileOutput = undefined
] = require('./libs/get-cli-args');

const mergeCobertura = require('./libs/merge-cobertura');

mergeCobertura(coverageReportsDir, coverageMergedFileOutput);
