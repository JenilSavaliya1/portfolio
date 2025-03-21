import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext';
import styles from '../Styles/Home.module.css';

function Home() {

  const { theme } = useContext(ThemeContext);
  const themeClass = theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    // <div className="container">
    //   <h1>Welcome to My Portfolio </h1>
    //   <p>Hi i am Jenil Savaliya, currently doing my bachelors in Dalhousie University as an Applied Computer Science Major. I am currently trying to expand my skill set and find a
    //     career path that suits best to me. I am enthusiastic about working with Data and generate insights from the junk of data. Above you can see the project section where you can find my personal and academic projects
    //     completed by me in this journey of 4 years in Dalhousie University.
    //   </p>
    // </div>

    <div className={`${styles.container} ${themeClass}`}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I am Jenil Savaliya, currently doing my bachelors in Dalhousie University as an
        Applied Computer Science Major. I am currently trying to expand my skill set and find a
        career path that suits best to me. I am enthusiastic about working with Data and generate
        insights from the junk of data. Above you can see the project section where you can find my
        personal and academic projects completed by me in this journey of 4 years at Dalhousie University.
      </p>
      {/* {weather.city && (
        <div>
          <h2>Weather in {weather.city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Description: {weather.description}</p>
        </div>
      )} */}
    </div>
  );
}

export default Home;
