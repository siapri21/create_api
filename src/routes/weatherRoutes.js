import express from 'express';
import weatherController from '../controllers/weatherController';

const router = express.Router();

router.get("/weather", weatherController.getWeather);

module.exports = router;
