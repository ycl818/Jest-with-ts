# Master unit testing with NodeJs, Typescript, Jest and React

## What is Jest?
* JS / TS testing framework
    * Developed by Facebook
* Test runner:
    * Sut of global functions: describe, test, expect

* Assertion of library:
    * Powerful set of matchers

* Advantages of Jest:
    * Most popular test framework, most suppported
    * All in one solutions: (test runner, asserting library, matchers)
    * TypeScript support

### First project
Download nessary dependencies in Dev
```
 npm i -D typescript jest ts-jest @types/jest ts-node
```

Generate jest.config.js but we want ts file
```
npx ts-jest config:init
```
```typescript!
// jest.config.ts (create by yourself)
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true, // Display mor information in console
};

export default config;

```
---

### Namimg
you can name it as fileName.test.ts || filename.spec.ts

### First testing

src/app/Util.ts
```typescript
export function toUpperCase(arg: string): string {
  return arg.toUpperCase();
}
```
src/test/Util.test.ts
```typescript!
import { toUpperCase } from "../app/Util";

describe("Util test suite", () => {
  test("shoud return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });
});
```
But it shows typescript warning, so we have to add tsconfig
![image](https://hackmd.io/_uploads/SJn0MMhPA.png)

---
Then No warning anymore.
tsconfig.json
```
{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
```
![image](https://hackmd.io/_uploads/Sy0I7G3vC.png)


### Convention to write unit test

Structure of a properly written unit test:
    AAA principles:
    - arrange
    - act
    - assert
    
    Setup
    Teardown
    
### Structure of a test 3A
```typescript!
import { toUpperCase } from "../app/Util";

describe("Util test suite", () => {
  it("shoud return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert:
    expect(actual).toBe(expected);
  });
});

```

## Intermediate testing topics
* F.I.R.S.T principles
* Jest hooks - how to structure tests
* Test for errors with jest
* Jest aliases
* Debugging - for VSCode
* Coverage

### F.I.R.S.T principles
* Principles, not rules, that we may follow when writing test:
    * Fast
        * Unit tests should be fast
        * Faster tests - faster feedback
    * Independent
        * Tests should be isolated from:
            * Other Tests
            * External environment
                * No shared state with other tests
                * The order in which tests run should not matter
                * Contradiction with the Fast principle
                    * Individual tests take more time to setup
    * Repeatable
        * Smae result with the same input:
            * Challenge: Random/ Date values - we will often mock these
        * Ecample: test that writes to a database:
            * It should always clean up
        * In contracdiction with the Fast principle:
            * More setup and teardown operations
    * Self-Validating
        * After the test is finished, it's results should be clear:
            * Pass/fail
    * Thorough
        * Cover all the cases/paths/scenarios
            * Hard to think at all of them from the beginning
        * Happy caes, bad path, edge cases
        * Invalid output
        * Large values
        * 100 % code coverage - not a great indicator

### Test Properties
test properties
* only
* skip
* todo
* concurrent

test aliasies:
* it
* test
* xit = it.skip
* fit = it.only

watch mode
* in script add "test": "jest --watch"

### vscode configuration for debug
```
https://github.com/microsoft/vscode-recipes
```
click the debug icon and create lanuch.json (ts)

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Jest Current File",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": [
        "--runTestsByPath",
        "${relativeFile}",
        "--config",
        "jest.config.ts"
      ],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen",
      "disableOptimisticBPs": true,
      "windows": {
        "program": "${workspaceFolder}/node_modules/jest/bin/jest"
      }
    }
  ]
}

```

### "istanbul igore next"
write this before the code, it will ignore to the testing
* Sometimes trivial or hard to test code can be excluded from coverage. This can be achieved with /* istanbul ignore next */
