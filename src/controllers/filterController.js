import { getWeather } from "../services/weatherService.js";

const filterWeather = (data) => {
    return {
        temperature: data.main.temp,
        visibility: data.visibility,
        description: data.weather[0].description, 
    };
};

export const getFilteredWeather = async (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.status(400).send("city requis en parametre ");
    }

    try {
        const data = await getWeather(city); 
        const filteredData = filterWeather(data); 
        res.json(filteredData); 
    } catch (error) {
        if (error.message === "Ville introuvable.") {
            res.status(404).send(error.message);
        } else {
            res.status(500).send(error.message);
        }
    }
};
