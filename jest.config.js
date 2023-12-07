module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
    setupFiles: ['./jest.polyfills.js'],
    testEnvironmentOptions: {
        customExportConditions: [''],
      },
}