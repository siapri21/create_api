import express from "express";
import router from "./src/routes/weatherRoute.js";
import routerData from "./src/routes/dataRoute.js"; 

const app = express();

// Utilisation des route
app.use("/api", router);      
app.use("/api/data", routerData); 

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
