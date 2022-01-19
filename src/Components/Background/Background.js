import React from "react";
import { ResApi } from "../Api";
import Clima from "../Clima/Clima";
import "./Background.css";

const Background = () => {
  const weather = React.useContext(ResApi);
  const clima = weather.weather[0].main;
  console.log(clima);
  return (
    <div className={`${clima}`}>
      <Clima />
    </div>
  );
};

export default Background;
