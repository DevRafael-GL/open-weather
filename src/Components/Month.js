import React from "react";

let date = new Date();

const Month = () => {
  // const [dateMonth, setDateMonth] = React.useState({
  //   day: date.getDate(),
  //   month: date.getMonth()+1,
  //   year: date.getYear()
  // })

  let diaDaSemana = date.getDay();
  let day = String(date.getDate());
  let month = String(date.getMonth() + 1);
  let year = date.getFullYear();

  switch (diaDaSemana) {
    default:
      diaDaSemana = false;
      break;
    case 0:
      diaDaSemana = "Domingo";
      break;
    case 1:
      diaDaSemana = "Segunda";
      break;
    case 2:
      diaDaSemana = "Terça";
      break;
    case 3:
      diaDaSemana = "Quarta";
      break;
    case 4:
      diaDaSemana = "Quinta";
      break;
    case 5:
      diaDaSemana = "Sexta";
      break;
    case 6:
      diaDaSemana = "Sábado";
      break;
  }

  switch (+month) {
    default:
      month = false;
      break;
    case 1:
      month = "Jan";
      break;
    case 2:
      month = "Fev";
      break;
    case 3:
      month = "Mar";
      break;
    case 4:
      month = "Abr";
      break;
    case 5:
      month = "Maio";
      break;
    case 6:
      month = "Jun";
      break;
    case 7:
      month = "Jul";
      break;
    case 8:
      month = "Ago";
      break;
    case 9:
      month = "Set";
      break;
    case 10:
      month = "Out";
      break;
    case 11:
      month = "Nov";
      break;
    case 12:
      month = "Dez";
      break;
  }

  let dataAtual = `${day} ${month} ${year}`;

  return (
    <>
      <span>{diaDaSemana}</span>, <span>{dataAtual}</span>
    </>
  );
};

export default Month;
