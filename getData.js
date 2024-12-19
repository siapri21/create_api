import express from "express";
import axios from "axios";

const getData = express();

// Définition de BASE_URL
const API_KEY = "e1039b3fe7762e9d6738cbdc81e0a6bb";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;

// Définition de la route /data
getData.get("/data_api", async (req, res) => {
    try {
        const response_data_api = await axios.get(BASE_URL);
        res.json(response_data_api.data); // Renvoi des données de l'API
    } catch (error) {
        res.status(500).json({ error: error.message }); // Gestion des erreurs
    }
});

// Lancement du serveur
const PORT = 3000;
getData.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
