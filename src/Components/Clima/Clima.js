import React from "react";
import { ResApi } from "../Api";
import Hours from "../Hours";
import Month from "../Month";
import "./Clima.css";
import Input from "../Input/Input";
import { GlobalContext } from "../../Context/Context";

const Clima = () => {
  const weather = React.useContext(ResApi);
  const { erro } = React.useContext(GlobalContext);
  return (
    <section className="containerClima">
      <header className="header">
        {window.innerWidth < 900 ? (
          <div className="erro">
            <Input />
            {erro && <p>Cidade não encontrada.</p>}
          </div>
        ) : (
          <h3>Clima.</h3>
        )}
      </header>
      <main className="main">
        <div>
          <h1 className="temp">{Math.round(weather.main.temp)}°</h1>
          <div className="info">
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
        </div>
      </main>
    </section>
  );
};

export default Clima;
