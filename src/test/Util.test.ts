import { toUpperCase } from "../app/Util";

describe("Util test suite", () => {
  test("shoud return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });
});
