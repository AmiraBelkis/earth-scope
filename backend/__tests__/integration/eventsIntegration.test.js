import express from 'express';
import nock from "nock";
import request from "supertest";
import * as mapRoutes from '../../src/routes/mapRoutes.js';
import { createNasaScope } from '../utils/nasaApiEventsMockup.js';
import eventsTestCases from '../ressources/getEventsTestCases.json'


const api = express();
api.use(express.json());
api.use('/api/map', mapRoutes.router);



describe("Get events", () => {
    eventsTestCases.forEach(({ testName, mapRequest, nasaRequest, nasaResponse, expectedStatus }) => {
        test(testName, async () => {
            createNasaScope(nasaRequest, nasaResponse)
            const response = await request(api)
                .post("/api/map/events/goejson")
                .send(mapRequest);
            expect(response.statusCode).toBe(expectedStatus);
            expect(response.body).not.toBeNull();
        });
    });
    afterAll(() => {
        nock.cleanAll();
    });
});