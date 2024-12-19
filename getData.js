import express from "express"; 
import axios from "axios";
import fs from "fs";

// Création de l'application GetData pour récupérer la totalité des données de l'API
const getData = express();

const API_KEY = "e1039b3fe7762e9d6738cbdc81e0a6bb";
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;

// Définition de la route GET pour "/data_api"
getData.get("/data_api", async (req, res) => {
    try {
        // Effectuer une requête GET vers l'API OpenWeather
        const response_data_api = await axios.get(BASE_URL);
        const data = response_data_api.data;

        // Sauvegarder les données dans un fichier JSON
        fs.writeFile("data_api.json", JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture dans le fichier JSON :", err);
                return res.status(500).json({ error: "Erreur lors de la sauvegarde des données." });
            }
            console.log("Les données ont été sauvegardées dans le fichier data_api.json");
        });
        // Retourner les données sous forme de réponse JSON
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = 3000;
const DATA = "/data_api";

// Lancement du serveur
getData.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}${DATA}`);
});
