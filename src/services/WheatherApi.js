/** @format */
import axios from "axios";
const apiKey = import.meta.process.VITE_openweather_API_KEY;

const getLocationByInput = () => {
  return axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city.name},${state.code},${country.code}&limit=10&appid=${apiKey}`
  );
};

const getWhetherData = () => {
  return axios.get(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}`
  );
};

export { getLocationByInput, getWhetherData };
