import "./Teclado.css";
import Tecla from "./tecla";
import "../App.css";
import { useState } from "react";

let letId = 0;
const Teclado = () => {
  // const tipoNum={
  //   numero:0,
  //   signo:"+",
  //   id:1
  // }

  const [numArray, setNumArray] = useState([]);
  const [numero1, setNumero1] = useState(0);
  const [numeroUnido, setNumeroUnido]=useState(0)

  const addNumeroEntero=(NumeroUnido)=>{
    console.log("NumeroUnido en addNumeroEntero",NumeroUnido )
    setNumeroUnido(NumeroUnido)}

  

  const addNumer = (newNumber) => {
    setNumArray([...numArray, newNumber]);

    let numeroEntero=[]
    numArray.map((object)=>{
      console.log("object de addNumber",object)
      numeroEntero.push(object.numero)

    })
    console.log("addNumer",numeroEntero)
    addNumeroEntero(parseInt(numeroEntero.join('')))
  };

  const agregarCarcter = (simbolo) => {
    const numAgregar = { id: letId++, numero: simbolo };
    addNumer(numAgregar);
  };

  const sumar = () => {
    setNumero1(parseInt(numArray.join(""), 10));
    setNumArray("+");
  };

  // numArray.map((numero)=>{
  //   let numeroJuntos=[]
  //   numeroJuntos.push(numero)
  //   console.log(numeroJuntos)

  // })
  console.log(numArray)
  console.log("Este es numero Unido",numeroUnido)

  return (
    <>
      <div id="result" className="display">
        {numero1}
      </div>
      <div id="operacion" className="display">
       {numeroUnido}
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
