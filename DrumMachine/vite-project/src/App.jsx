import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Nombres from "../../componentes/Nombres";

function App() {
  return (
    <>
      <button className="btn btn-primary">Este es mi boton</button>
      <Nombres nombre="Juan" />

    </>
  );
}

export default App;
