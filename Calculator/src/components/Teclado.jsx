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
  const [enter, setEnter] = useState(0);
  const [out, setOut] = useState(0);

  // const [numeroUnido, setNumeroUnido]=useState(0)

  const agregarCaracter = (simbolo) => {
    setNumArray([...numArray, simbolo]);
  };

  const handelClick = (e) => {
    console.log(e.target.value);
    const texto = numArray.join("");
    console.log(`Esto es el array si separadores ${texto}`);
    const numero = parseFloat(texto.match(/-?\d+(\.\d+)?/g).join(""));
    console.log(`Esto es el array sin signos ${numero}`);
    setOut(numero);
    console.log(typeof numero);
  };
  const handelOut = (e) => {
    setOut(e.target.value);
  };
  const handelEnter = (e) => {
    setEnter(e.target.value);
  };

  return (
    <>
      <div>
        <input
          value={out}
          readOnly={true}
          onChange={handelOut}
          id="out"
          type="text"
        />

        <input
          value={numArray.join("")}
          onChange={handelEnter}
          id="enter"
          type="text"
          readOnly={true}
        />
      </div>

      <button value="/" onClick={handelClick}>
        Boton
      </button>

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
