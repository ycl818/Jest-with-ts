import type { Config } from "@jest/types";

const baseDir = "<rootDir>/src/app/doubles";
const baseTestDir = "<rootDir>/src/test/doubles";

const config: Config.InitialOptions = {
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true, // Display mor information in console
    collectCoverage: true, // Collect coverage information
    collectCoverageFrom: [`${baseDir}/**/*.ts`], // Files to collect coverage information from
    testMatch: [`${baseTestDir}/**/*.test.ts`], // Files to run tests from
};

export default config;
