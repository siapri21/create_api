import express from "express";
import { getWeatherData } from "../controllers/DataController.js";

const routerData = express.Router();

routerData.get("/data_api", () => {});

export default routerData;
