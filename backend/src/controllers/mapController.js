import ApiError from '../exceptions/ApiError.js';
import * as mapService from '../services/mapService.js';

export const getEventsGoeData = async (req, res) => {
    try {
        const eventsGoeData = await mapService.fetchEventsGoeData(req.body)
        res.status(200).json(eventsGoeData);
    } catch (error) {
        console.error('Error fetching events data: \n', error)
        res.status((error instanceof ApiError ? error.statusCode : 500)).send(error.message)
    }
};
