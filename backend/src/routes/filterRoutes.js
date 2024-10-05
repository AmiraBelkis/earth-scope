import express from 'express';
import * as filterController from '../controllers/filterController.js';

export const router = express.Router();

router.get('/regions', filterController.getRegions);
router.get('/categories', filterController.getCategories);
router.get('/sources', filterController.getSources);
