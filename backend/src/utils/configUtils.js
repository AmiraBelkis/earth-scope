export const validateNasaConfig = (config, endPoint) => {
    if (!config || !config.ApiKey || !config.Endpoints || !config.Endpoints[endPoint]) {
        return false;
    }
    return true;
};

export const validateRegoinsConfig = (config) => {
    if (!config || !config.Regions || !Array.isArray(config.Regions)) {
        return false;
    }
    return true;
};