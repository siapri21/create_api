import express from 'express';
import weatherController from '../controllers/weatherController';

const publicRoute = express.Router();

router.get("/weather", weatherController.getWeather);

export default publicRoute