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
import operCompleto from "../helpers/operCompleto";
//^[+-]?\d+(\.\d+)?$ expresion regular para busca un numbero precedido o no por un signo
// const numeroFiltrado = parseFloat(texto.match(/-?\d+(\.\d+)?/g));

const KeyBoarad = () => {
  const [formula, setFormula] = useState([]);
  const [resOn, setResOn]=useState(false);
  const [numin, setNumin] = useState([]); // lo que se muestra en el
  const[colocacion,setColocacion]= useState(false);
  const[procede,setProcede]=useState(false)
  
  const[cuenta,setCuenta]= useState([{
    id:0,
    numero:0,
    decimal:false,
    signOperador:"+"
  }]);

  useEffect(()=>{
    
   actuFormla()
    BorrarNumin()
    setColocacion(false)
  

  },[colocacion])

  useEffect(()=>{

    actuFormla
    
    console.log("Estoy en el useEfect",formula)
    formula==""||formula.join("")=='0=' ? 0 : resultado(formula)
    setProcede(false)
  },[procede])
 

  const actuNumIn = (valor) => {
   

    setNumin((c) => [...c, valor]);
    
    console.log("Estoy en actuNumIn",numin)
  };

  const BorrarNumin=()=>{
    setNumin([]);
  }
  const BorrarFormula=()=>{
    setFormula([])
  }
  const BorrarTodo=()=>{
    setNumin([0]);
    setFormula([0]);

  }
  const BorrarANada=()=>{
    setNumin([]);
  }


 
  
 const actuFormla=() => {
  let a=numin.join("")
  a=a.replace(/^0+(?=\d)|(?<=\.)0+/g, ''); //no hay ceros a la izq, o solo uno si hay un punto

  
    setFormula(((c)=>[...c,a]));
    console.log("Estoy actualizando formula",formula)

    
  }
  
  
 
  const crearNumero = (e) => {
    const valor=e.target.value
    if(resOn){
     
      BorrarTodo();
      setResOn(false)
    }
    if(formula[0]===0)
      setFormula([])

    if(numin[0]===0)
    setNumin([])
      

    //primer digito un punto o un signo mas o menos
    while (numin.length===0 || numin[0]===0) {
        if(esUnPunto(valor)){
            actuNumIn("0.")
        }
        if(valor=="+"||valor=="-"){
           
            actuNumIn(valor)
            
        }
        if(sonNumeros(valor)){
            actuNumIn(valor)
        }
     return
    }
//Para cambiar entre signos + y -
    if((numin.length==1 && !sonNumeros(numin[numin.length-1]) )&& signoMasMenos(valor) && numin[numin.length-1] !== valor){
      
        BorrarNumin()
        actuNumIn(valor)
return;
        
    }
    //Si hay un signo de mas menos como primer digito y se escribe un punto

     if(numin.length==1 && signoMasMenos(numin[numin.length-1]) && (esUnPunto(valor) && soloUnPunto(numin) == false) ){
        actuNumIn("0.")
        
return;
        
    }


//Si son numeros con un solo punto decimal
    if( esUnPunto(valor) && soloUnPunto(numin) == false || sonNumeros(valor)){

        actuNumIn(valor)
    }

   if(( esUnPunto(valor) && soloUnPunto(numin) == false || sonNumeros(valor)) && signosSiNo(valor)){

        actuNumIn(valor)

    }
    if((operCompleto(numin)==true && signosSiNo(valor))||(operCompleto(numin)==true && valor=="=") ){

      actuNumIn(valor)
      
       setColocacion(true)
       setProcede(true)
       
      
      

      
    }



    //   if( signoMasMenos(e.target.value) && !signoAnterior ){
    //     setSignoAnterior(true);
    //     actuNumIn(e.target.value)
    //   }else if(signoAnterior && signoMasMenos(e.target.value) && e.target.value!==numin.length-1){
    //     BorrarNumin();
    //     actuNumIn(e.target.value)
    //   }
   

    // if (numin.length > 0 && signoAnterior && signoMasMenos(e.target.value) && e.target.value!==numin.length-1) {
    //   BorrarNumin();
    //   actuNumIn(e.target.value);
    //   return
    // }
    // if(numin.length>0 && sonNumeros(e.target.value) ){
    //   actuNumIn(e.target.value);
    //   BorrarFormula()
    //   actuFormla();
    // return
    // }
    
return 
  }
  const resultado=(a)=>{
    let e=a.map(item=>{
      if(typeof item === 'number'){
        return item.toString
      }else{
        return item
      }
    })

    const regex=/=|0=/g;
    if(!regex.test(e)){
      console.log("he psado por aqui")
      return
    } 
    
    console.log("Esto es e",e)
    let regex1 = /(?<=\S)([-+x/=])(?=\S)/g;
    let expresion=e.join("")
    expresion=expresion.replace(/=/g,"")
    console.log("expresion",expresion)
    let resultado = expresion.replace(regex1, ' $1 '); // Añade espacio antes y después del operador
     console.log("resultado",resultado)
    const evaluar= eval(resultado)
    console.log("Estoy en evaluar")
    console.log(typeof evaluar)
    console.log("Esto es evaluar",evaluar.length)

    setNumin(evaluar)
    setResOn(true);
    
    

   


    
    
    console.log("Formula a operar,resultado",evaluar)

  }

  const prueba = () => {
    console.log(formula)
    console.log(formula.join("",","))
  };

  const mostrarProb = () => {
numin.map((item)=>console.log(item) )
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
          id="out"
          type="text"
          placeholder="out"
        />
        <input
          className="misDisplays"
          /* value={numArray.join("")}*/ value={
            typeof numin === 'number' ? numin :
            numin.join("")}
          id="display"
          type="text"
          readOnly={true}
          placeholder="display"
        />
      </div>
      <button onClick={prueba}>prueba</button>
      <button onClick={mostrarProb}>MostrarProb</button>

      <div className="rejilla">
        <button id="clear" value="Ac" onClick={BorrarTodo}>
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
        <button id="multiply" value="*" onClick={crearNumero}>
          x
        </button>
        <button id="add" value="+" onClick={crearNumero}>
          +
        </button>
        <button id="subtract" value="-" onClick={crearNumero}>
          -
        </button>
        <button id="equals" value="=" onClick={crearNumero}>
          =
        </button>
      </div>
    </div>
  );
};

export default KeyBoarad;
