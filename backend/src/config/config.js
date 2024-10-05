import dotenv from 'dotenv';
dotenv.config();

export const statusList = ['all', 'open', 'closed'];

export const regionsConfig = {
    "Description": "The following configuration sets the different regions for our application. Each region represents a continent. The coordinates represent the bounding box of the region using two pairs of coordinates: the upper left-hand corner (lon, lat) followed by the lower right-hand corner (lon, lat).",
    "Regions": [
        {
            "id": "all",
            "title": "Global",
            "coordinates": ""
        },
        {
            "id": "africa",
            "title": "Africa",
            "coordinates": "-19.570320,-35.424335,56.484361,36.317008"
        },
        {
            "id": "southAmerica",
            "title": "South America",
            "coordinates": "-124.218775,-60.094675,-32.812525,32.247862"
        },
        {
            "id": "northAmerica",
            "title": "North America",
            "coordinates": "-175.078125,32.616734,-19.676563,82.811371"
        },
        {
            "id": "europe",
            "title": "Europe",
            "coordinates": "-19.655000,36.919590,37.375000,71.314028"
        },
        {
            "id": "asia",
            "title": "Asia",
            "coordinates": "38.578132,5.599689,191.132820,77.396873"
        },
        {
            "id": "oceania",
            "title": "Oceania",
            "coordinates": "109.746090,-50.847512,191.320309,-2.169431"
        },
        {
            "id": "antarctica",
            "title": "Antarctica",
            "coordinates": "-165.117205,-84.903218,191.210920,-60.034675"
        }
    ]
}

export const nasaEndpointsConfig = {
    "Description": "Endpoints provided by NASA’s Earth Observatory Natural Event Tracker (EONET), which is a repository of metadata about natural events.",
    "ApiKey": `${process.env.NASA_API_KEY}`,
    "Endpoints": {
        "categories": `${process.env.NASA_API_URL}/categories`,
        "sources": `${process.env.NASA_API_URL}/sources`,
        "eventsGoeData": `${process.env.NASA_API_URL}/events/geojson`
    }
}