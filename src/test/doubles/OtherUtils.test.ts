import {
    calculateComplexity,
    toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
    it("ToUpperCase - calls callback for invalid argument", () => {
        const actual = toUpperCaseWithCb("", () => {});
        expect(actual).toBeUndefined();
    });

    it("ToUpperCase - calls callback for valid argument", () => {
        const actual = toUpperCaseWithCb("abc", () => {});
        expect(actual).toBe("ABC");
    });

    it("Calculate complexity", () => {
        const someInfo = {
            length: 10,
            extraInfo: {
                field1: "someField",
                field2: "someField2",
            },
        };

        const actual = calculateComplexity(someInfo as any);
        expect(actual).toBe(20);
    });
});
