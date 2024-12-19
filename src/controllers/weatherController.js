import axios from 'axios';

const API_KEY = process.env.API_KEY;

exports.getWeather = async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send("veuillez saisie le nom de la ville requis ");
    }
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await axios.get(URL_API);
        res.json(response.data);
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send("La ville saisie est introuvable");
        } else {
            res.status(500).send("problème  rencontre sur l'API");
        }
    }
};
