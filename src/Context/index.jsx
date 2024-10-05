import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [forecast, setForecast] = useState([]);
  const [place, setPlace] = useState('Chennai');
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      setError("API key is missing.");
      return;
    }

    try {
      // Weather and Forecast API URLs
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`;
      const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&units=metric&appid=${apiKey}`;

      // Fetch weather data
      const weatherResponse = await axios.get(weatherUrl);
      setWeather({
        temp: weatherResponse.data.main.temp,
        description: weatherResponse.data.weather[0].description,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed
      });

      // Fetch forecast data
      const forecastResponse = await axios.get(forecastUrl);
      const filteredForecast = forecastResponse.data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
      );
      setForecast(filteredForecast.map(item => ({
        date: item.dt_txt.split(" ")[0],
        temp: item.main.temp,
        description: item.weather[0].description,
        humidity: item.main.humidity,
        windSpeed: item.wind.speed
      })));
      setError(null);

    } catch (error) {
      console.error(error);
      setError('An error occurred while fetching the data.');
    }
  };

  useEffect(() => {
    if (place) fetchWeather();
  }, [place]);

  return (
    <StateContext.Provider value={{ weather, forecast, setPlace, place, error }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
