/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
const { defaults } = require('jest-config')
export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  bail: true,
  coverageProvider: 'babel',
  preset: 'ts-jest',
  testMatch: ['**/tests/*.test.ts'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx']
}
