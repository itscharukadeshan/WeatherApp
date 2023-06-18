/** @format */
import axios from "axios";
const apiKey = import.meta.env.VITE_openweather_API_KEY;

let lat = "33.44";
let lon = "94.04";

const getLocationByInput = async () => {
  return await axios.get(
    `https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=1980-02-06&end_date=2023-06-13&hourly=temperature_2m&min=2023-05-30&max=2023-06-13`
  );
};

const getWhetherData = async () => {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
  );
};

export { getLocationByInput, getWhetherData };
