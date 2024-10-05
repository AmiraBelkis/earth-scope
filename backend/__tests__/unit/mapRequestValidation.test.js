import RequestNotValidError from "../../src/exceptions/RequestNotValidError.js";
import { isMapRequestValid } from "../../src/utils/formatUtils.js";
import testCases from "../ressources/mapRequestValidationTestCases.json";

testCases.forEach(({ testName, request, result, expectError }) => {
    test(testName, () => {
        if (expectError) {
            expect(() => isMapRequestValid(request)).toThrow(RequestNotValidError);
        } else {
            expect(isMapRequestValid(request)).toStrictEqual(result);
        }
    });
});
