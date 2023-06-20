/** @format */

import axios from "axios";

const getCoordinatesByLocation = async (location) => {
  const url = `https://api.open-meteo.com/v1/geocode?location=${encodeURIComponent(
    location
  )}&limit=1`;

  try {
    const response = await axios.get(url);
    const { latitude, longitude } = response.data[0];
    return { latitude, longitude };
  } catch (error) {
    console.error("Error fetching coordinates:", error);
    throw error;
  }
};

const getClimateData = async (latitude, longitude, startDate, endDate) => {
  const url = `https://archive-api.open-meteo.com/v1/archive?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching climate data:", error);
    throw error;
  }
};

const getWeatherData = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode_10day`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const getAirQualityData = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/airquality?latitude=${latitude}&longitude=${longitude}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    throw error;
  }
};
const getWeatherDataLastYear = async (latitude, longitude) => {
  const currentDate = Math.floor(Date.now() / 1000);
  const lastYearDate = currentDate - 31536000;
  const lastYearWeatherData = await getWeatherData(
    latitude,
    longitude,
    lastYearDate
  );
  return lastYearWeatherData;
};

const getWeatherData10YearsAgo = async (latitude, longitude) => {
  const currentDate = Math.floor(Date.now() / 1000);
  const tenYearsAgoDate = currentDate - 315360000;
  const tenYearsAgoWeatherData = await getWeatherData(
    latitude,
    longitude,
    tenYearsAgoDate
  );
  return tenYearsAgoWeatherData;
};

export {
  getClimateData,
  getWeatherData,
  getAirQualityData,
  getWeatherDataLastYear,
  getWeatherData10YearsAgo,
  getCoordinatesByLocation,
};
