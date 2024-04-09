module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    setupFiles: ['./jest.polyfills.js'],
    testEnvironmentOptions: {
        customExportConditions: [''],
      },
    moduleNameMapper: {
      "\\.(css|sass)$": "identity-obj-proxy",
    },
}