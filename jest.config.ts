import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true, // Display mor information in console
  collectCoverage: true, // Collect coverage information
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"], // Files to collect coverage information from
};

export default config;
