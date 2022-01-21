import React from "react";
import { GlobalContext } from "../../Context/Context";
import "./Input.css";

const Header = ({ mobile }) => {
  const { local, setLocal, setErro } = React.useContext(GlobalContext);

  function buscaInput(e) {
    if (e.keyCode === 13) {
      setLocal(e.target.value);
      e.target.value = "";
    }
  }

  console.log(local);

  return (
    <>
      <div className="busca">
        <input
          className={mobile}
          type="text"
          onChange={() => setErro(false)}
          onKeyDown={(e) => buscaInput(e)}
          placeholder="Buscar cidade..."
        />
      </div>
    </>
  );
};

export default Header;
