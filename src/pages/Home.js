import React, { useEffect, useState, useContext, use } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import styles from '../Styles/Home.module.css';

function Home() {

  const { theme } = useContext(ThemeContext);
  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/weather')
      .then(response => response.json())
      .then(data => {
        setWeather(data);
      });
  }, []);

  return (

    <div className={`${styles.container} ${themeClass}`}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I am Jenil Savaliya, currently doing my bachelors in Dalhousie University as an
        Applied Computer Science Major. I am currently trying to expand my skill set and find a
        career path that suits best to me. I am enthusiastic about working with Data and generate
        insights from the junk of data. Above you can see the project section where you can find my
        personal and academic projects completed by me in this journey of 4 years at Dalhousie University.
      </p>
      {weather ?  (
        <div>
          <h2>Weather in {weather.city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Description: {weather.description}</p>
        </div>
      )
        : null
      }
    </div>
  );
}

export default Home;
