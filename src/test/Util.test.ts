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
