import React from "react";
import { GlobalContext } from "../Context/Context";
export const ResApi = React.createContext();
const Api = ({ children }) => {
  const { local, setLocal, setErro } = React.useContext(GlobalContext);
  // const [location, setLocation] = React.useState(false);
  const [weather, setWeather] = React.useState(false);

  React.useEffect(() => {
    async function getWeather() {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&lang=pt_br&units=metric`
        );

        if (response.status === 404 || response.status === 400) {
          console.log("Status:", response.status);
          setErro(true);
          return setLocal("Belo Horizonte");
        }
        const data = await response.json();

        setWeather(data);
      } catch (error) {
        console.log("Erro:", error);
      }
    }
    getWeather();
  }, [local, setLocal, setErro]);

  // React.useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     getWeather(position.coords.latitude, position.coords.longitude);
  //     console.log(position.coords.latitude, position.coords.longitude);
  //     setLocation(true);
  //   });
  // }, []);

  if (!weather) return null;

  // if (!location) return <p>Você precisa habilitar a localização no browser!</p>;
  // else

  return <ResApi.Provider value={weather}>{children}</ResApi.Provider>;
};

export default Api;
