import axios from 'axios';
import 'dotenv/config';

const API_KEY = process.env.API_KEY;
// console.log(API_KEY );

export async function weatherServices(city) {
    if (!city) {
        throw new Error("City name is required");
    }
    const API_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // const BASE_API= `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${API_KEY}`
    // console.log(API_URL)
    const response = await axios.get(API_URL);
    return response.data;
}

// sercices de recuperation des donnees
export async  function DataServices () {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des données de l'API.");
    }
};

