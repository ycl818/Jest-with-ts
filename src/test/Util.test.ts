import { getStringInfo, StringUtils, toUpperCase } from "../app/Util";

describe("Util test suite", () => {
  describe.only("StringUtils tests", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
    });

    it.only("Should return correct uppercase", () => {
      const actual = sut.toUpperCase("abc");
      expect(actual).toBe("ABC");
    });

    it("Should throw error on invalid argument - function", () => {
      function expectError() {
        const actual = sut.toUpperCase("");
      }

      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid argument");
    });

    it("Should throw error on invalid argument - arrow function", () => {
      expect(() => {
        sut.toUpperCase("");
      }).toThrowError("Invalid argument");
    });

    it("Should throw error on invalid argument - try catch block", (done) => {
      try {
        sut.toUpperCase("");
        done("GetStringInfo should throw error for invalid arg!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument");
        done();
      }
    });
  });

  it("shoud return uppercase of valid string", () => {
    // arrange:
    const sut = toUpperCase;
    const expected = "ABC";

    // act:
    const actual = sut("abc");

    // assert:
    expect(actual).toBe(expected);
  });

  describe("ToUpperCase examples", () => {
    it.each([
      { input: "abc", expected: "ABC" },
      { input: "My-String", expected: "MY-STRING" },
      { input: "def", expected: "DEF" },
    ])("$input toUpperCase should return $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);
      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg My-String should", () => {
    test("return right length", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toHaveLength(9);
    });

    test("return right lowerCase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.lowerCase).toBe("my-string");
    });

    test("return right upperCase", () => {
      const actual = getStringInfo("My-String");
      expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return right characters", () => {
      const actual = getStringInfo("My-String");
      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
    });

    test("return right extraInfo", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).not.toBeUndefined();
    });

    test("return right extraInfo", () => {
      const actual = getStringInfo("My-String");
      expect(actual.extraInfo).toEqual({});
    });
  });
});
