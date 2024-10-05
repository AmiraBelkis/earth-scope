import express from 'express';
import * as mapController from '../controllers/mapController.js';

export const router = express.Router();

router.post('/events/goejson', mapController.getEventsGoeData);