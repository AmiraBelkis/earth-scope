import ApiError from '../exceptions/ApiError.js';
import * as filterService from '../services/filterService.js';

export const getRegions = async (req, res) => {
    try {
        const regions = await filterService.fetchRegions()
        res.status(200).json(regions);
    } catch (error) {
        console.error('Error fetching regions:', error)
        res.status((error instanceof ApiError ? error.statusCode : 500)).send(error.message)
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await filterService.fetchCategories()
        res.status(200).json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error)
        res.status((error instanceof ApiError ? error.statusCode : 500)).send(error.message)
    }
};

export const getSources = async (req, res) => {
    try {
        const sources = await filterService.fetchSources()
        res.status(200).json(sources);
    } catch (error) {
        console.error('Error fetching sources:', error)
        res.status((error instanceof ApiError ? error.statusCode : 500)).send(error.message)
    }
}; 