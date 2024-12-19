import fs from "fs";
import { DataServices } from "../services/weatherServices.js";

export async function getWeatherData(req, res){
    try {
        const data = await DataServices();

        // Sauvegarde des données dans un fichier JSON
        fs.writeFile("data_api.json", JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture dans le fichier JSON :", err);
                return res.status(500).json({ error: "Erreur lors de la sauvegarde des données." });
            }
            console.log("Les données ont été sauvegardées dans le fichier data_api.json");
        });

        // Envoi de la réponse au client
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
