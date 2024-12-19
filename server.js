import express from "express";
import router from "./src/routes/weatherRoutes.js";
import routerData from "./src/routes/DataRoutes.js";

const app = express();

app.use("/api", router);
app.use("/api/data_api", routerData); 


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
