import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import  './Tecla.css'

const Tecla = ({simbolo,pulsa}) => {
  

  const handClick=()=>{
    console.log("pulso tecla",simbolo)
    pulsa(simbolo)
  }

  return (
    <button className="btn-primary" onClick={handClick}>{simbolo}
    </button>
    
  );
};

export default Tecla;
