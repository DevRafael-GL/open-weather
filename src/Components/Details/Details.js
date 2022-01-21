import React from "react";
import { ResApi } from "../Api";
import "./Details.css";
import Input from "../Input/Input";
import { GlobalContext } from "../../Context/Context";

const Details = () => {
  const weather = React.useContext(ResApi);
  const { erro } = React.useContext(GlobalContext);
  const clima = weather.weather[0].main;

  return (
    <section className={`${clima}-details detailsContainer`}>
      {window.innerWidth > 900 && (
        <div className="erro">
          <Input mobile="mobile" />
          {erro && <p>Cidade não encontrada.</p>}
        </div>
      )}

      <h2 className="tituloDetails">Weather Details</h2>
      <p>
        <span>Temperatura Máxima:</span>{" "}
        <span>{Math.round(weather.main.temp_max)}°</span>
      </p>
      <p>
        <span>Temperatura Mínima:</span>{" "}
        <span>{Math.round(weather.main.temp_min)}°</span>
      </p>
      <p>
        <span>Sensação Térmica:</span>{" "}
        <span>{Math.round(weather.main.feels_like)}°</span>
      </p>
      <p>
        <span>Umidade:</span> <span>{Math.round(weather.main.humidity)}%</span>
      </p>
      <p>
        <span>Pressão atmosférica:</span>{" "}
        <span>{Math.round(weather.main.pressure)} hPa</span>
      </p>
      <p>
        <span>Velocidade do vento:</span>{" "}
        <span>{Math.round(weather.wind.speed)}km/h</span>
      </p>
    </section>
  );
};

export default Details;
