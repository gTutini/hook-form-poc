module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.yarn/"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
};
