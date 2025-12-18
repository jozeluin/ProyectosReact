import "./Teclado.css";
import Tecla from "./tecla";
import "../App.css";
import { useState } from "react";

//^[+-]?\d+(\.\d+)?$ expresion regular para busca un numbero precedido o no por un signo
// const numeroFiltrado = parseFloat(texto.match(/-?\d+(\.\d+)?/g));

const Calcu = () => {
  /**
   * signosMatematicos
   */
  const isOperator = /[x/+-]/;
  /**
   * k finaliza con un operador matematico
   */
  const finalizaOperador = /[x+-/]$/;
  /**
   * Numero con signo matematico k finaliza con un signo negativo
   */
  const finOperNeg = /\d[x/+-]{1}-$/;

  const [state, setState] = useState({
    /**
     * valor en display
     */
    valorActual: "0",
    valorPrevio: "0",
    formula: "",
    signoActual: "pos",
    ultimaTecla: "",
    evaluado: false,
  });

  const evaluar = () => {
    let formula = state.formula;
    while (finalizaOperador.test(formula)) formula = formula.slice(0 - 1);
    let resultado = eval(formula);
    setState({
      ...state,
      formula: formula,
      valorActual: resultado,
      evaluado: true,
    });
  };
  /**
   *
   * @param {*}   e tecla pulsada
   */
  const operador = (e) => {
    const val = e.target.value;
    const { formula: f, valorPrevio: vp, evaluado: ev } = state;
    setState({ ...state, evaluado: false, valorActual: val });
    //Si le he dado ya al igual
    ev ? setState({...state,formula: vp + val })
          //formula=valorPrevio+valorActual
          
          //Si no le he dado al igual entonces, preguntamos si la formula finaliza con un operador matematico
          //Si es asi volvemos a preguntar si es un digito seguido de signo matematico seguido de menos
          //Despues preguntamos si el signo menos No es igual a lo que hemos introducido, si es asi la fomula=ValorPrevio+valorIntroducido
       
      : finalizaOperador.test(f) ? finOperNeg.test(f) ? "-" !== val && setState({...state,formula: vp + val})
           
      //Si anteriormente habia un signo "-",entonces testeamos si la formula con lo que introducimos termina en "-", si es asi es solo la formula, y despues se
            //agrega ese signo.

        : setState({...state,formula: (finOperNeg.test(f + val) ? f : vp) + val })
            //Opcion por defecto.(ev=false) si no hemos dado al "=" y es un numero seguido de un operador.
      : setState({...state,
          valorPrevio: f,
          formula: f + val,
          valorActual:val
        });
  };

  const inNumero = (e) => {
    if(!state.valorActual.includes("Limite")){
      const puls = e.target.value;
    /**
     * valorActual: ultima pulsacion
     */
    const { formula: f, valorActual: v, evaluado: ev } = state;
    setState({...state,evaluar:false}) , 
    v.length>15 ? MaxLimitPul() : ev ? setState({
      ...state,
      valorActual:puls,
      formula:"0" !== puls ? puls:""
    }):


    setState({
      ...state,
      //si lo que habia en valorActual es = 0 o si es un operador val va a valorActual(e.target.value) si no , se añade a lo que habia
      valorActual: "0" === v || isOperator.test(v) ? puls : v + puls,
      formula:"0" === v && "0" === puls ? "" === f ? puls: 
      f: /([^.0-9]0|^0)$/.test(f)? f.slice(0, -1) + puls: f + puls,
    });
    }
    
  };

  const MaxLimitPul = () => {
    setState({
      ...state,
      valorActual: "Limite Digitos..",
      valorPrevio: state.valorActual,
    });
  };

  const inicializar = () => {
    setState({
      valorActual: "0",
      valorPrevio: "0",
      formula: "",
      signoActual: "+",
      evaluado: false,
      ultimaTecla:""
    });
  };

  return (
    <div className="contenedor">
      <div>
        <input
          className="misDisplays"
          value={state.formula}
          readOnly={true}
          id="out"
          type="text"
          placeholder="out"
        />
        <input
          className="misDisplays"
          value={state.valorActual}
          id="display"
          type="text"
          readOnly={true}
          placeholder="display"
        />
      </div>
      {/* <button onClick={prueba}>prueba</button>
      <button onClick={mostrarProb}>MostrarProb</button> */}

      <div className="rejilla">
        <button id="clear" value="Ac" onClick={inicializar}>
          Ac
        </button>
        <button id="divide" value="/" onClick={operador}>
          /
        </button>
        <button id="eight" value="8" onClick={inNumero}>
          8
        </button>
        <button id="nine" value="9" onClick={inNumero}>
          9
        </button>
        <button id="seven" value="7" onClick={inNumero}>
          7
        </button>
        <button id="decimal" value="." onClick={inNumero}>
          .
        </button>
        <button id="four" value="4" onClick={inNumero}>
          4
        </button>
        <button id="five" value="5" onClick={inNumero}>
          5
        </button>
        <button id="six" value="6" onClick={inNumero}>
          6
        </button>
        <button id="one" value="1" onClick={inNumero}>
          1
        </button>
        <button id="two" value="2" onClick={inNumero}>
          2
        </button>
        <button id="three" value="3" onClick={inNumero}>
          3
        </button>
        <button id="zero" value="0" onClick={inNumero}>
          0
        </button>
        <button id="multiply" value="*" onClick={operador}>
          x
        </button>
        <button id="add" value="+" onClick={operador}>
          +
        </button>
        <button id="subtract" value="-" onClick={operador}>
          -
        </button>
        <button id="equals" value="=" onClick={evaluar}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calcu;
