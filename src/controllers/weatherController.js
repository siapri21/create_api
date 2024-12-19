import { weatherServices } from  "../services/servicesweather.js";

export default async function getWeather(req, res) {
    try {
        const weatherData = await weatherServices(city);
        res.json(weatherData);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send("La ville saisie est introuvable");
        } else {
            res.status(500).send("problème  rencontre sur l'API");
           
        }
    }
};
