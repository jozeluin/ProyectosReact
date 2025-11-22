import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Keyboard } from "../../componentes/Keyboard";
import play from "../../componentes/play";




function App() {
  return (
    <>
        <div className="text-end" id="drum-machine">
          <Keyboard play={play}/>
        </div>
     
    </>
  );
}

export default App;
