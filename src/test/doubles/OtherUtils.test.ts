import {
    calculateComplexity,
    toUpperCaseWithCb,
} from "../../app/doubles/OtherUtils";

describe("OtherUtils test suite", () => {
    describe("Tracking callbacks with Jest mocks", () => {
        const callBackMock = jest.fn();

        afterEach(() => {
            jest.clearAllMocks();
        });

        it("calls callback for invalid argument", () => {
            const actual = toUpperCaseWithCb("", callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toHaveBeenCalledWith("Invalid argument");
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });

        it("calls callback for valid argument", () => {
            const actual = toUpperCaseWithCb("abc", callBackMock);
            expect(actual).toBe("ABC");
            expect(callBackMock).toHaveBeenCalledWith(
                "called function with abc"
            );
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });
    });

    describe("Tracking callbacks", () => {
        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++;
        }

        afterEach(() => {
            // clearing tracking
            cbArgs = [];
            timesCalled = 0;
        });

        it("calls callback for invalid argument", () => {
            const actual = toUpperCaseWithCb("", callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain("Invalid argument");
            expect(timesCalled).toBe(1);
        });

        it("calls callback for valid argument", () => {
            const actual = toUpperCaseWithCb("abc", callBackMock);
            expect(actual).toBe("ABC");
            expect(cbArgs).toContain("called function with abc");
            expect(timesCalled).toBe(1);
        });
    });

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
