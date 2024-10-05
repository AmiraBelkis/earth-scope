import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import * as filterRoutes from './routes/filterRoutes.js';
import * as mapRoutes from './routes/mapRoutes.js';


const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.json())

const client = process.env.CLIENT_URL || 'http://localhost:4173'
app.use(cors({
    origin: client
}));

// Routes
app.use('/api/filters', filterRoutes.router);
app.use('/api/map', mapRoutes.router);


app.listen(PORT, () => console.log(`Server Started : http://localhost:${PORT}/`))