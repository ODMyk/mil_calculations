/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  verbose: true,

  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov'],

  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
    '!src/**/index.{ts,js}',
  ],

  testMatch: [
    '**/__tests__/**/*.(test|spec).[jt]s?(x)',
    '**/?(*.)+(test|spec).[jt]s?(x)',
  ],

  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },

  clearMocks: true,

  testEnvironment: 'node',
  moduleNameMapper: {
    '^utils(.*)$': '<rootDir>/src/utils$1',
  },
};
