import express from 'express';
import getWeather from '../controllers/weatherController.js'


const router = express.Router();
router.get("/weather", getWeather);


export default router