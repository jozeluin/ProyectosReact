import "./Teclado.css";
import Tecla from "./tecla";
import "../App.css";

import Hijo from "./Hijo";
import { useEffect, useState } from "react";
import signosSiNo from "../helpers/signosSiNo";
import soloUnPunto from "../helpers/soloUnPunto";
import sonNumeros from "../helpers/sonNumeros";
import esUnPunto from "../helpers/esUnPunto";
import pruebaArrayMap from "../helpers/pruebaArrayMap";
import signoMasMenos from "../helpers/signoMasMenos";
//^[+-]?\d+(\.\d+)?$ expresion regular para busca un numbero precedido o no por un signo
// const numeroFiltrado = parseFloat(texto.match(/-?\d+(\.\d+)?/g));

const Teclado = () => {
  const [formula, setFormula] = useState([]);
  const [num, setnum] = useState([]);
  const [numin, setNumin] = useState([]); // lo que se muestra en el
  const[signoAnterior,setSignoAnterior]= useState(false);
 

  const actuNumIn = (valor) => {
    setNumin((c) => [...c, valor]);
  };
  const BorrarNumin=()=>{
    setNumin([]);
  }

  const actuFormla=(valor) => {
    setFormula((c) => [...c, valor]);
  }
  const signoAnteriorSiNo=()=>{
    if(signoAnterior){
      setSignoAnterior(false);
    }else{
      setSignoAnterior(true);
    }
  }


  const crearNumero = (e) => {
    
   if(numin.length ===0){
    if (esUnPunto(e.target.value)) {
      actuNumIn("0.");
      actuFormla("0.");
    return;
    }

     if(signosSiNo(e.target.value)){
        actuNumIn(e.target.value);
        if(signoMasMenos(e.target.value))
        actuFormla(e.target.value);
    return;
     }
   }

    ////////////////////////////////////////numin.length >0
   if(sonNumeros(e.target.value)){
    actuNumIn(e.target.value);}

  if(esUnPunto(e.target.value) && soloUnPunto(numin.join(""))){
  //  if(signoAnterior){
  //   BorrarNumin();
  //   signoAnteriorSiNo();
  // }
    actuNumIn(e.target.value);
    
    return;
  }
 

   


  if(signosSiNo(e.target.value) ){
    actuNumIn(e.target.value);
actuFormla(numin.join(""));
   // BorrarNumin();
  //   //if(numin[numin.length -1] === "-" || numin[numin.length -1] === "+")
      

 
  //  //}
  //   //actuNumIn(e.target.value);
  //  // actuFormla(e.target.value);
    
  //   //signoAnteriorSiNo();
    return;
  }


    
 

    
    return;
    // switch (e.target.value) {
    //   case "+":
    //   case "-":
    //   case "x":
    //   case "/":
    //     if (numin.length === 0) {
    //       //caso primer digito es un signo
    //       setNumin([...numin, e.target.value]);
    //     } else if (numin.length > 0) {
    //       console.log("estoy en dividir");
    //       //setOut((c)=> [...c , numin.join("")]);
    //       setNumin([""]);
    //        setNumin([...numin, e.target.value]);

    //        console.log("despues de limpiar numin", numin);
    //        console.log(out)
    //        setOut((c) => [...c, numin.join("")]); //guardamos el numero anterior en out
    //        console.log(out)
    //     }

    //     break;

    //   // case "-":
    //   // case "x":
    //   // case "/":
    //   case ".":
    //     if (numin.length === 0) {
    //       /* && esUnPunto(e.target.value)){//caso primer digito es un signo*/
    //       let valor = e.target.value;
    //       valor == "." ? (valor = "0.") : valor; //si el primer valor es un punto lo convertimos en "0."
    //       setNumin((c) => [...c, valor]);
    //     } else if (numin.length > 0) {
    //       soloUnPunto(numin.join("")) && setNumin([...numin, e.target.value]);
    //     }
    //     break;
    //   default:
    //     // if(numin.length === 0 ){
    //     //   setNumin(...numin,"")
    //     // }
    //     //setOut((c)=> c + numin.join(""));
    //     setNumin([]);

    //     setNumin([...numin, e.target.value]);
    //     //setOut((c)=> c + numin.join(""));
    //     break;
    // }
  };
  

  const prueba = () => {
    puestaAZero();
  };

  const mostrarProb = () => {
    console.log(signosSiNo(numin.join("")));
  };

  const puestaAZero = () => {
    setNumin([]);
  };
  //console.log(numArray);
  return (
    <div className="contenedor">
      <div>
        <input
          className="misDisplays"
          value={formula.join("")}
          readOnly={true}
          id="display"
          type="text"
          placeholder="Out"
        />
        <input
          className="misDisplays"
          /* value={numArray.join("")}*/ value={numin.join("")}
          id="in"
          type="text"
          readOnly={true}
          placeholder="In"
        />
      </div>
      <button onClick={prueba}>prueba</button>
      <button onClick={mostrarProb}>MostrarProb</button>

      <div className="rejilla">
        <button id="clear " value="Ac" onClick={puestaAZero}>
          Ac
        </button>
        <button id="divide" value="/" onClick={crearNumero}>
          /
        </button>
        <button id="eight" value="8" onClick={crearNumero}>
          8
        </button>
        <button id="nine" value="9" onClick={crearNumero}>
          9
        </button>
        <button id="seven" value="7" onClick={crearNumero}>
          7
        </button>
        <button id="decimal" value="." onClick={crearNumero}>
          .
        </button>
        <button id="four" value="4" onClick={crearNumero}>
          4
        </button>
        <button id="five" value="5" onClick={crearNumero}>
          5
        </button>
        <button id="six" value="6" onClick={crearNumero}>
          6
        </button>
        <button id="one" value="1" onClick={crearNumero}>
          1
        </button>
        <button id="two" value="2" onClick={crearNumero}>
          2
        </button>
        <button id="three" value="3" onClick={crearNumero}>
          3
        </button>
        <button id="zero" value="0" onClick={crearNumero}>
          0
        </button>
        <button id="multiply" value="x" onClick={crearNumero}>
          x
        </button>
        <button id="add" value="+" onClick={crearNumero}>
          +
        </button>
        <button id="subtract" value="-" onClick={crearNumero}>
          -
        </button>
        <button id="equals" value="=">
          =
        </button>
      </div>
    </div>
  );
};

export default Teclado;
