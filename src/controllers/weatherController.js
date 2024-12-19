import { weatherServices } from "../services/weatherServices.js";

export default async function getWeather(req, res) {
    // console.log("OK")
    const city = req.query.city;
    if (!city) {
        return res.status(400).send("Veuillez saisir le nom de la ville requis");
    }
    try {
        const weatherData = await weatherServices(city);
        res.json(weatherData);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send("La ville saisie est introuvable");
        } else {
            res.status(500).send("Problème rencontré sur l'API");
        }
    }
}
