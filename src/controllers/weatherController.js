import axios from 'axios';
import 'dotenv/config';

const API_KEY = process.env.API_KEY;
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

export default async function getWeather(req, res) {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send("veuillez saisie le nom de la ville requis ");
    }
    try {
        //const response = await axios.get(API_KEY);
        //get data
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send("La ville saisie est introuvable");
        } else {
            res.status(500).send("problème  rencontre sur l'API");
        }
    }
};
