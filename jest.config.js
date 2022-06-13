/** @type {import('@ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [ 'default', 'jest-junit' ],
    testResultsProcessor: 'jest-junit',
    testTimeout: 150000,
    coverageReporters: ["text", "cobertura"]
  };