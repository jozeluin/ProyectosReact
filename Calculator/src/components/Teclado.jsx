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
//^[+-]?\d+(\.\d+)?$ expresion regular para busca un numbero precedido o no por un signo
// const numeroFiltrado = parseFloat(texto.match(/-?\d+(\.\d+)?/g));

const Teclado = () => {
 

 
  const [out, setOut] = useState([]);

  const [numin, setNumin] = useState([]); // lo que se muestra en el input

  const actulizacionOut=()=>setOut(numin.join(""));

  useEffect(() => {
   
    setOut(numin.join(""));

  }, [numin]);
  
  const crearArray = (e) => {


    switch (e.target.value) {
      
      
      case ("+"):
      case ("-"):
      case ("x"):
      case ("/"):

        if(numin.length === 0 ){//caso primer digito es un signo
          setNumin([...numin, e.target.value]);
        }else{
          // setOut((c)=> [...c , numin.join("")]);
          setNumin((c)=>c = [""])
          setNumin((c)=>[...c, e.target.value])

        }

       break;

      // case "-": 
      // case "x":
      // case "/":
      case ".":
         if(numin.length === 0){/* && esUnPunto(e.target.value)){//caso primer digito es un signo*/
           let valor=e.target.value;
           valor == "." ? valor="0." : valor;//si el primer valor es un punto lo convertimos en "0."
           setNumin((c)=>[...c, valor])
          
         }else if (numin.length > 0){
           soloUnPunto(numin.join("")) && setNumin([...numin, e.target.value])
         }
        break;
        default:
          // if(numin.length === 0 ){
          //   setNumin(...numin,"")
          // } 
         //setOut((c)=> c + numin.join(""));
          setNumin([])
          setNumin([...numin, e.target.value]);
          //setOut((c)=> c + numin.join(""));
        break;
    }

       

    // if(numin.length === 0 && esUnPunto(e.target.value)){//caso primer digito es un signo
    //   let valor= signosSiNo(e.target.value);
    //   valor == " ." ? valor="0." : valor;//si el primer valor es un punto lo convertimos en "0."
    //    setNumin([...numin, valor]);
    // } else {
    //    soloUnPunto(numin.join("")) && setNumin([...numin, e.target.value])
   
    // }
    
    
    return;
  };

  
 

  const prueba = () => {
    setOut((c)=> [...c , numin.join("")]);
    console.log(out)
  }
    
  const mostrarProb = () => {console.log(signosSiNo(numin.join("")))};

  const puestaAZero = () => setNumin([0]);
  //console.log(numArray);
  return (
    <div className="contenedor">
      <div>
        
        <input className="misDisplays"  value={out} readOnly={true}  id="display" type="text" placeholder="Out" />
        <input className="misDisplays"/* value={numArray.join("")}*/value={numin.join("")} id="in" type="text"readOnly={true} placeholder="In" />
      </div>
      <button onClick={prueba}>prueba</button>
      <button onClick={mostrarProb}>MostrarProb</button>

      <div className="rejilla">
        <button id="clear " value="Ac" onClick={puestaAZero}>
          Ac
        </button>
        <button id="divide" value="/" onClick={crearArray}>
          /
        </button>
        <button id="eight" value="8" onClick={crearArray}>
          8
        </button>
        <button id="nine" value="9" onClick={crearArray}>
          9
        </button>
        <button id="seven" value="7" onClick={crearArray}>
          7
        </button>
        <button id="decimal" value="." onClick={crearArray}>
          .
        </button>
        <button id="four" value="4" onClick={crearArray}>
          4
        </button>
        <button id="five" value="5" onClick={crearArray}>
          5
        </button>
        <button id="six" value="6" onClick={crearArray}>
          6
        </button>
        <button id="one" value="1" onClick={crearArray}>
          1
        </button>
        <button id="two" value="2" onClick={crearArray}>
          2
        </button>
        <button id="three" value="3" onClick={crearArray}>
          3
        </button>
        <button id="zero" value="0" onClick={crearArray}>
          0
        </button>
        <button id="multiply" value="x" onClick={crearArray}>
          x
        </button>
        <button id="add" value="+" onClick={crearArray}>
          +
        </button>
        <button id="subtract" value="-" onClick={crearArray}>
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
