/** @format */
import axios from "axios";
const apiKey = import.meta.env.VITE_openweather_API_KEY;

let cityName = "london";
let stateCode = "0";
let countryCode = "";
let lat = "33.44";
let lon = "94.04";

const getLocationByInput = async () => {
  return await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},${stateCode},${countryCode}&limit=10&appid=${apiKey}`
  );
};

const getWhetherData = async () => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
};

export { getLocationByInput, getWhetherData };
