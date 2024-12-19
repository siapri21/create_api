import express from "express";
import weatherRoutes from "./src/routes/weatherRoutes";

const app = express();

// Utilisation des routes
app.use("/api", weatherRoutes);

// Lancer le serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
