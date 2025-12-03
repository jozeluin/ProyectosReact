import "./Teclado.css";
import Tecla from "./tecla";
import "../App.css";
import { useState } from "react";

const Teclado = () => {
  let id=0
  const tipoNum={
    numero:0,
    signo:"+",
    id:id
  }
 
  const [numArray, setNumArray] = useState([tipoNum]);

  const [numero1, setNumero1] = useState(0);

  const agregarCarcter = (simbolo) => {
   setNumArray([...numArray, {numero:simbolo,id:id++}]);

  };

  const sumar = () => {
    
    setNumero1(parseInt(numArray.join(''),10))
    setNumArray("+")

  };
  

  return (
    <>
      <div id="result" className="display">
        {numero1}
      </div>
      <div id="operacion" className="display">
        {numArray.simbolo}
      </div>
      <div className="rejilla">
        <Tecla simbolo={"Ac"} pulsa={() => setNumArray([])} />
        <Tecla simbolo={"/"} pulsa={agregarCarcter} />
        <Tecla simbolo={"8"} pulsa={agregarCarcter} />
        <Tecla simbolo={"9"} pulsa={agregarCarcter} />
        <Tecla simbolo={"7"} pulsa={agregarCarcter} />
        <Tecla simbolo={"."} pulsa={agregarCarcter} />
        <Tecla simbolo={"4"} pulsa={agregarCarcter} />
        <Tecla simbolo={"5"} pulsa={agregarCarcter} />
        <Tecla simbolo={"6"} pulsa={agregarCarcter} />
        <Tecla simbolo={"1"} pulsa={agregarCarcter} />
        <Tecla simbolo={"2"} pulsa={agregarCarcter} />
        <Tecla simbolo={"3"} pulsa={agregarCarcter} />
        <Tecla simbolo={"0"} pulsa={agregarCarcter} />
        <Tecla simbolo={"x"} pulsa={agregarCarcter} />
        <Tecla simbolo={"+"} pulsa={sumar} />
        <Tecla simbolo={"-"} pulsa={agregarCarcter} />
        <Tecla simbolo={"="} pulsa={agregarCarcter} />
      </div>
    </>
  );
};

export default Teclado;
