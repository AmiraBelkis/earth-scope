import express from 'express';
import nock from "nock";
import request from "supertest";
import * as filterRoutes from '../../src/routes/filterRoutes.js';
import { createNasaScope } from '../utils/nasaApiFiltersMockup.js'
import filterTestCases from '../ressources/getFiltersTestCases.json'

const api = express();
api.use(express.json());
api.use('/api/filters', filterRoutes.router);

describe("Get Region List", () => {
    test("Get Regions List", async () => {
        const response = await request(api).get("/api/filters/regions");
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
        expect(response.body).toContainEqual({
            "id": "all",
            "title": "Global",
            "coordinates": ""
        });
    });
});


describe("Get filters from nasa api", () => {
    filterTestCases.forEach(({ testName, endpoint, nasaResponse, expected }) => {
        test(testName, async () => {
            createNasaScope(endpoint, nasaResponse)
            const response = await request(api)
                .get("/api/filters/" + endpoint);
            expect(response.statusCode).toBe(expected.status);
            expect(response.body).not.toBeNull();
            const expectedResponse = typeof expected.body === "string" ? response.text : response.body
            expect(expectedResponse).toEqual(expected.body);
        });
    });
    afterAll(() => {
        nock.cleanAll();
    });
});
