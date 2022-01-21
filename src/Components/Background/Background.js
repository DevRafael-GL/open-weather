import React from "react";
import { ResApi } from "../Api";
import Clima from "../Clima/Clima";
import Details from "../Details/Details";
import "./Background.css";

const Background = () => {
  const weather = React.useContext(ResApi);
  const clima = weather.weather[0].main;
  console.log(clima);
  return (
    <div className={`${clima} container responsive`}>
      <Clima />
      <Details />
    </div>
  );
};

export default Background;
