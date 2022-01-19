import React from "react";
export const ResApi = React.createContext();
const Api = ({ children }) => {
  const [location, setLocation] = React.useState(false);
  const [weather, setWeather] = React.useState(false);

  async function getWeather(lat, long) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&lang=pt_br&units=metric`
    );
    const data = await response.json();
    setWeather(data);
    console.log(data);
  }

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  if (!weather) return null;

  if (!location) return <p>Você precisa habilitar a localização no browser!</p>;
  else return <ResApi.Provider value={weather}>{children}</ResApi.Provider>;
};

export default Api;
