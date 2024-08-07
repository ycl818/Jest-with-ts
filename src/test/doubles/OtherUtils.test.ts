import { calculateComplexity } from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
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
