import React, { createContext } from "react";

export const GlobalContext = createContext();

const Context = ({ children }) => {
  const [local, setLocal] = React.useState("Belo Horizonte");
  const [erro, setErro] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  return (
    <GlobalContext.Provider
      value={{ local, setLocal, erro, setErro, loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
