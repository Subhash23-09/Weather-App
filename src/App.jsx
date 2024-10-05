import React, { useEffect, useState } from 'react';
import './App.css';
import search from './assets/icons/search.svg';
import chartIcon from './assets/icons/chart.png';
import { useStateContext } from './Context';
import { BackgroundLayout, WeatherCard, MiniCard } from './components'; // Adjust path if needed

function App() {
  const [input, setInput] = useState('');
  const { weather, place, setPlace, error, forecast } = useStateContext(); // Destructure forecast here

  const submitCity = () => {
    if (input) {
      setPlace(input);
      setInput('');
    }
  };

  useEffect(() => {
    console.log("Current weather: ", weather);
  }, [weather]);

  return (
    <div className='w-full h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center'>
        <h1 className='font-bold tracking-wide text-3xl'>Weather App</h1>
        <div className='bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
            type="text"
            placeholder='Search city'
            className='focus:outline-none w-full text-[#212121] text-lg'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <img
            src={chartIcon}
            alt="chart"
            className='w-[1.5rem] h-[1.5rem] cursor-pointer'
            onClick={() => {
              console.log('Chart icon clicked');
            }}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className='w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center'>
        {error ? (
          <p className='text-red-500'>{error}</p>
        ) : weather.temp ? (
          <>
            <WeatherCard
              place={place}
              windspeed={weather.windSpeed}
              humidity={weather.humidity}
              temperature={weather.temp}
              conditions={weather.description}
            />
            <div className='flex justify-center gap-8 flex-wrap w-[60%]'>
              {forecast.map((item, index) => (
                <MiniCard
                  key={index}
                  time={item.date}
                  temp={item.temp}
                  iconString={item.description}
                />
              ))}
            </div>
          </>
        ) : (
          <p>Loading weather data...</p>
        )}
      </main>
    </div>
  );
}

export default App;
