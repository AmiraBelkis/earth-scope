import { validateNasaConfig, validateRegoinsConfig } from "../../src/utils/configUtils";
import testCases from "../ressources/configValidationTestCases.json";

testCases.regionsConfig.forEach(({ testName, config, expected }) => {
    test(testName, () => {
        expect(validateRegoinsConfig(config)).toBe(expected);
    });
});


testCases.nasaConfig.forEach(({ testName, endpoint, config, expected }) => {
    test(testName, () => {
        expect(validateNasaConfig(config, endpoint)).toBe(expected);
    });
});