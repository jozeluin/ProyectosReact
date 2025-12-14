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
  const [formula, setFormula] = useState([0]);
  const [num, setnum] = useState([]);
  const [numin, setNumin] = useState([]); // lo que se muestra en el
  const[signoAnterior,setSignoAnterior]= useState(false);
  const[cuenta,setCuenta]= useState([{
    id:0,
    numero:0,
    decimal:false,
    signOperador:"+"
  }]);
 

  const actuNumIn = (valor) => {
    setNumin((c) => [...c, valor]);
    
  };
  const BorrarNumin=()=>{
    setNumin([]);
  }
  const BorrarFormula=()=>{
    setFormula([])
  }

  
  
 const actuFormla=() => {
    setFormula((c)=>[...c,numin]);
  }
  
  
 
  const crearNumero = (e) => {
    
    if(numin.length===0){
      if( signoMasMenos(e.target.value) && !signoAnterior ){
        setSignoAnterior(true);
        actuNumIn(e.target.value)
      }else if(signoAnterior && signoMasMenos(e.target.value) && e.target.value!==numin.length-1){
        BorrarNumin();
        actuNumIn(e.target.value)
      }
    return
    }
    if (numin.length > 0 && signoAnterior && signoMasMenos(e.target.value) && e.target.value!==numin.length-1) {
      BorrarNumin();
      actuNumIn(e.target.value);
      return
    }
    if(numin.length>0 && sonNumeros(e.target.value) ){
      actuNumIn(e.target.value);
      BorrarFormula()
      actuFormla();
    return
    }
    

  }

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
