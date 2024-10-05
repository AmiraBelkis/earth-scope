import { convertListToString, isMapRequestValid } from "../../utils/formatUtils.js";
class MapRequest {
    regionId;
    categoriesList;
    sourcesList;
    startDate;
    endDate;
    status;

    constructor({ regionId, categoriesList, sourcesList, status, startDate, endDate }) {
        [startDate, endDate] = isMapRequestValid({ regionId, categoriesList, sourcesList, status, startDate, endDate });
        this.regionId = regionId;
        this.categoriesList = convertListToString(categoriesList);
        this.sourcesList = convertListToString(sourcesList);
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}


export default MapRequest;
