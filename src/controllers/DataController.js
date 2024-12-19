import { DataServices } from "../services/servicesweather.js";
import fs from "fs";

export default async function getWeatherData(req, res) {
    try {
        const data = await DataServices();
        fs.writeFile("data_api.json", JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error("Erreur lors de l'écriture dans le fichier JSON :", err);
                return res.status(500).json({ error: "Erreur lors de la sauvegarde des données." });
            }
            console.log("Les données ont été sauvegardées dans le fichier data_api.json");
            res.json(data);
        });
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        res.status(500).json({ error: error.message });
    }
}
