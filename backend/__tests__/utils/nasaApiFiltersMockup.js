import nock from "nock";
import dotenv from 'dotenv';

dotenv.config();
const url = 'https://eonet.gsfc.nasa.gov';

export const createNasaScope = (endpoint, response) => {
    return nock(url)
        .get('/api/v3/' + endpoint)
        .query({ api_key: process.env.NASA_API_KEY })
        .matchHeader('Content-Type', 'application/json')
        .reply(response.status, response.body);
};
