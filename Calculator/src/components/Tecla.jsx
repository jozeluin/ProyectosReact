import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import  './Tecla.css'

const Tecla = ({simbolo,pulsa}) => {
  const misimbolo=simbolo

  const handClick=()=>{
    pulsa(misimbolo)
  }

  return (
    <button className="btn-primary" onClick={handClick}>{simbolo}
    </button>
    
  );
};

export default Tecla;
