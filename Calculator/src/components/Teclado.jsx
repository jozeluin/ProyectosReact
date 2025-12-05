import "./Teclado.css";
import Tecla from "./tecla";
import "../App.css";

import Hijo from "./Hijo";
import { useState } from "react";
//^[+-]?\d+(\.\d+)?$ expresion regular para busca un numbero precedido o no por un signo
let idx = 0;

const Teclado = () => {
  // const tipoNum={
  //   numero:0,
  //   signo:"+",
  //   id:1
  // }

  const [numArray, setNumArray] = useState([]);
  const [tecla, setTecla] = useState("");

  // const [numeroUnido, setNumeroUnido]=useState(0)

  const agregarCaracter = (simbolo) => {
    setTecla(simbolo);
    setNumArray([...numArray, { numero: simbolo, id: idx++ }]);
  };

  const handelClick = () => {
    const path = "1243.888";
    const pattern = /^[+-]?\d+(\.\d+)?$/;

    const match = path.match(pattern);
    console.log(match);
  };

  return (
    <>
      <div id="result" className="display">
        out
      </div>

      <button value="/" onClick={handelClick}>
        Boton
      </button>

      <div id="operacion" className="display">
        In{numArray.map((item) => item.numero)}
      </div>
      <div className="rejilla">
        <Tecla simbolo={"Ac"} pulsa={() => setNumArray([])} />
        <Tecla simbolo={"/"} pulsa={agregarCaracter} />
        <Tecla simbolo={"8"} pulsa={agregarCaracter} />
        <Tecla simbolo={"9"} pulsa={agregarCaracter} />
        <Tecla simbolo={"7"} pulsa={agregarCaracter} />
        <Tecla simbolo={"."} pulsa={agregarCaracter} />
        <Tecla simbolo={"4"} pulsa={agregarCaracter} />
        <Tecla simbolo={"5"} pulsa={agregarCaracter} />
        <Tecla simbolo={"6"} pulsa={agregarCaracter} />
        <Tecla simbolo={"1"} pulsa={agregarCaracter} />
        <Tecla simbolo={"2"} pulsa={agregarCaracter} />
        <Tecla simbolo={"3"} pulsa={agregarCaracter} />
        <Tecla simbolo={"0"} pulsa={agregarCaracter} />
        <Tecla simbolo={"x"} pulsa={agregarCaracter} />
        <Tecla simbolo={"+"} pulsa={agregarCaracter} />
        <Tecla simbolo={"-"} pulsa={agregarCaracter} />
        <Tecla simbolo={"="} pulsa={agregarCaracter} />
      </div>
    </>
  );
};

export default Teclado;
