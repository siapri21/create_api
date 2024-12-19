import express from "express";
import { getFilteredWeather } from "../controllers/weatherController.js";

const router = express.Router();

router.get("/filter", getFilteredWeather);

export default router;
