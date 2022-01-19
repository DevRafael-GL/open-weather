import React from "react";
import { ResApi } from "../Api";
import Hours from "../Hours";
import Month from "../Month";
import "./Clima.css";

const Clima = () => {
  const weather = React.useContext(ResApi);
  return (
    <section className="container">
      <header className="header">
        <h3>Clima.</h3>
      </header>
      <main className="main">
        <h1 className="temp">{Math.round(weather.main.temp)}°</h1>
        <div className="data">
          <div className="left">
            <h2 className="city">{weather.name}</h2>
            <p className="date">
              <Hours /> • <Month />
            </p>
          </div>
          <div className="right">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              alt={weather.weather[0].description}
            />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Clima;
