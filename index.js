const express = require("express");
const axios = require("axios");
const app = express();


app.get("weather", async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).send("Le paramètre 'city' est requis.");
    }

    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(URL_API);
        res.json(response.data); // Retourne les données JSON de l'API
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send("Ville introuvable.");
        } else {
            res.status(500).send("Problème avec l'API.");
        }
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
