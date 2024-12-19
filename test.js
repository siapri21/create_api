const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`;
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/external-data", async (req, res) => {
    try {
        const response = await axios.get(BASE_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000/external-data"));

https//api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric