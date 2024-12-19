import express from "express"; 
import axios from "axios";

const API_KEY = "e1039b3fe7762e9d6738cbdc81e0a6bb"; // Remplacez par votre clé API OpenWeatherMap

const filterData = express();

filterData.get("/weather", async (req, res) => {
    const city = req.query.city; // La ville est passée en paramètre
    if (!city) {
        return res.status(400).send("Le paramètre 'city' est requis.");
    }
    
    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(URL_API);
        const data = response.data;

        const filtered_data = {
            temperature: data.main.temp, // Température actuelle
            visibility: data.visibility, // Visibilité (en mètres)
            description: data.weather[0].description, // Description du temps
        };

        // Retourner les données filtrées
        res.json(filtered_data); // Retourne les données JSON de l'API
    } catch (error) {
        if (error.response && error.response.status === 404) {
            res.status(404).send("Ville introuvable.");
        } else {
            res.status(500).send("Problème avec l'API.");
        }
    }
});

const PORT = 3000;
const city = "marseille";
const DATA = `/weather?city=${city}`;

// Lancement du serveur
filterData.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${DATA}`);
});