/** @format */

import axios from "axios";

const getCoordinatesByLocation = async (location) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search&name=${location}`;

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
  const url = `https://climate-api.open-meteo.com/v1/climate?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_mean,temperature_2m_max,temperature_2m_min,windspeed_10m_mean,cloudcover_mean,relative_humidity_2m_mean,rain_sum,snowfall_sum&models=CMCC_CM2_VHR4,FGOALS_f3_H,HiRAM_SIT_HR,MRI_AGCM3_2_S,EC_Earth3P_HR,MPI_ESM1_2_XR,NICAM16_8S&min=${startDate}&max=${endDate}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching climate data:", error);
    throw error;
  }
};

const getWeatherData = async (latitude, longitude) => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,rain,snowfall,weathercode,cloudcover,visibility,windspeed_10m,soil_temperature_0cm,uv_index,uv_index_clear_sky`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

const getAirQualityData = async (latitude, longitude) => {
  const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone`;
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
  const lastYearWeatherData = await getClimateData(
    latitude,
    longitude,
    lastYearDate,
    lastYearDate
  );
  return lastYearWeatherData;
};

const getWeatherData10YearsAgo = async (latitude, longitude) => {
  const currentDate = Math.floor(Date.now() / 1000);
  const tenYearsAgoDate = currentDate - 315360000;
  const tenYearsAgoWeatherData = await getClimateData(
    latitude,
    longitude,
    tenYearsAgoDate,
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
