import nock from "nock";
import dotenv from 'dotenv';

dotenv.config();
const url = 'https://eonet.gsfc.nasa.gov';

export const createNasaScope = (eventRequest, eventReply) => {
    eventRequest.api_key = process.env.NASA_API_KEY;
    return nock(url)
        .get('/api/v3/events/geojson')
        .query(eventRequest)
        .matchHeader('Content-Type', 'application/json')
        .reply(eventReply.status, eventReply.body);
};

