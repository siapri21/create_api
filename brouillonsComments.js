// // Importation des modules nécessaires
// import express from "express"; // Framework pour créer un serveur web
// import axios from "axios"; // Librairie pour effectuer des requêtes HTTP
// import fs from "fs"; // Module pour interagir avec le système de fichiers

// // Création de l'application Express
// const getData = express();

// // Clé API et URL de base pour accéder à l'API OpenWeather
// const API_KEY = "e1039b3fe7762e9d6738cbdc81e0a6bb"; // Clé unique pour authentifier les requêtes
// const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`; // URL pour récupérer les données météo

// // Définition de la route GET pour "/data_api"
// getData.get("/data_api", async (req, res) => {
//     try {
//         // Effectuer une requête GET vers l'API OpenWeather
//         const response_data_api = await axios.get(BASE_URL);
//         const extract_data = response_data_api.data; // Extraire les données de la réponse

//         // Sauvegarder les données dans un fichier JSON
//         fs.writeFile("data_api.json", JSON.stringify(extract_data, null, 2), (err) => {
//             if (err) {
//                 // Si une erreur survient lors de l'écriture du fichier
//                 console.error("Erreur lors de l'écriture dans le fichier JSON :", err);
//                 return res.status(500).json({ error: "Erreur lors de la sauvegarde des données." });
//             }
//             // Afficher un message dans la console si la sauvegarde est réussie
//             console.log("Les données ont été sauvegardées dans le fichier data_api.json");
//         });

//         // Retourner les données récupérées au client sous forme de réponse JSON
//         res.json(data);
//     } catch (error) {
//         // Gestion des erreurs (exemple : problème avec l'API)
//         res.status(500).json({ error: error.message });
//     }
// });

// // Définir le port sur lequel le serveur écoutera
// const PORT = 3000; // Numéro du port
// const DATA = "/data_api"; // Route principale pour accéder aux données

// // Lancer le serveur et afficher un message pour confirmer qu'il est actif
// getData.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}${DATA}`);
// });
