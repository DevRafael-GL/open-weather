import React from "react";

const date = new Date();

const Hours = () => {
  const [dateTime, setDateTime] = React.useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const horas = String(dateTime.hours);
  const minutos = String(dateTime.minutes);

  return (
    <>
      {`${horas.length === 1 ? "0" + horas : horas}:${
        minutos.length === 1 ? "0" + minutos : minutos
      }`}
    </>
  );
};

export default Hours;
