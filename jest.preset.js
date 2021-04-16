const nxPreset = require('@nrwl/jest/preset');
const jestHelpersDir = `${__dirname}/tools/jest-helpers`;
module.exports = {
  ...nxPreset,
  testMatch: ['**/+(*.)+(spec|test).+(ts|js)?(x)'],
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest',
  },
  resolver: '@nrwl/jest/plugins/resolver',
  moduleFileExtensions: ['ts', 'js', 'html'],
  moduleNameMapper: {
    '^.+\\.svg$': `${jestHelpersDir}/svgrMock.js`,
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `${jestHelpersDir}/fileMock.js`,
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/{jest.config,gatsby-*}.js',
    '!**/*.stories.{ts,tsx}',
    '!**/src/{polyfills,main}.{ts,tsx}',
    '!**/src/environments/**',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/public/**',
    '!**/types/**',
  ],
  coverageReporters: ['cobertura', 'html'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '<rootDir>/reports/junit',
        outputName: 'test-report.xml',
      },
    ],
  ],
};
