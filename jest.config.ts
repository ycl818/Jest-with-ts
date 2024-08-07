import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/pass_checker";
const baseTestDir = "<rootDir>/src/test/pass_checker";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true, // Display mor information in console
  collectCoverage: true, // Collect coverage information
  collectCoverageFrom: [`${baseDir}/**/*.ts`], // Files to collect coverage information from
  testMatch: [`${baseTestDir}/**/*.test.ts`], // Files to run tests from
};

export default config;
