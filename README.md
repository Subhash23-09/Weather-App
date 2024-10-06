# Weather-App

# Weather Application using React JS and Vite

This is a fully responsive weather application built using React JS and **Vite** for fast development and build performance. The app provides real-time weather information and a 5-day forecast for any city worldwide. It uses the OpenWeather API to display detailed weather data such as temperature, weather condition, wind speed, and humidity, all in an intuitive, sleek interface.

## Features

- **City Search**: Search for weather details by entering a city name in the search bar.
- **Current Weather**: Displays real-time temperature, weather condition, **wind speed**, and **humidity** for the selected city.
- **5-Day Forecast**: Shows the weather forecast for the next 5 days, including daily temperatures and weather conditions.
- **Unit Toggle**: Option to switch between Celsius and Fahrenheit for temperature units.
- **Responsive Design**: Optimized for both desktop and mobile views with a beautiful background image.
- **Weather Icons**: Visual representation of weather conditions with custom icons.
- **Date and Time**: Displays the current date and time for the selected city.
- **Error Handling**: Proper error messages are displayed for invalid city names or API issues.
- **Fast Build with Vite**: The app is built using Vite for fast development and optimized build times.
- **Last Searched City**: Saves and loads the last searched city using local storage.

## Technologies Used

- **React JS**: Frontend framework for building the user interface.
- **Vite**: Modern build tool for fast development and optimized build performance.
- **OpenWeather API**: To fetch real-time weather data and 5-day forecast.
- **Axios**: For handling API requests.
- **CSS**: For styling the layout and making the design responsive.
- **Local Storage**: To save the last searched city.
- **Chart.js / Recharts** (Optional): For visualizing weather trends using charts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Subhash23-09/Weather-App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Weather-App
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Get your OpenWeather API key by signing up at [OpenWeatherMap](https://openweathermap.org/).

5. Create a `.env` file in the root directory and add your API key:
   ```bash
   VITE_OPENWEATHER_API_KEY=your-api-key
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

7. To create a production build:
   ```bash
   npm run build
   ```

8. Preview the production build locally:
   ```bash
   npm run preview
   ```

## Usage

- **Search**: Type in the name of any city to get its weather details.
- **Current Weather**: View the current temperature, wind speed, humidity, and weather conditions.
- **5-Day Forecast**: Scroll down to see the forecast for the next 5 days with temperatures and weather icons for each day.
- **Toggle Temperature Unit**: Switch between Celsius and Fahrenheit using the unit toggle button.
- **Last Searched City**: Your last searched city is saved and displayed automatically when you revisit the app.

## Screenshots

(Insert relevant screenshots here to showcase the app.)

## Future Enhancements

- **Dark Mode**: Add the ability to toggle between light and dark themes.
- **Hourly Forecast**: Display weather updates by the hour for more detailed information.
- **Weather Alerts**: Provide alerts for severe weather conditions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This README now includes the URL to your GitHub repository: https://github.com/Subhash23-09/Weather-App.git.

Let me know if you'd like further adjustments!
