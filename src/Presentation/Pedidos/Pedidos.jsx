import { useState } from "react"
import Listapedidos from '../Pedidos/Componentes/ListaPedidos';
import VinetaPedidos from "./Componentes/VinetaPedidos";
import TopNav from '../Global/TopNav';
function Pedidos(){
    //ASDF    
    //Asdf
    const [modoVisualizacion, setModoVisualizacion] = useState("tabla")
    const butOnClick = function() {
        if (modoVisualizacion === "tabla") {
            setModoVisualizacion("Viñetas")
        }else {
            setModoVisualizacion("tabla")
        }
    }
    if(modoVisualizacion==="tabla"){
        return <div>
            <TopNav category={3}/>
            <br/>
            <h1>Pedidos : Tabla
            <br/>
                <button onClick={ butOnClick } className="btn btn-primary" type="button">
                    Cambiar Modo de Vista
                </button> 
            </h1>
            <br/>
            <Listapedidos/>
            
        </div>
    }else if(modoVisualizacion == "Viñetas"){
        return <div>
            <TopNav category={3}/>
            <br/>
            <h1>Pedidos : Viñeta
            <br/>
                <button onClick={ butOnClick } className="btn btn-primary" type="button">
                    Cambiar Modo de Vista
                </button>
            </h1> 
            <br/>
            <VinetaPedidos/>
        </div>
    }
    
}
export default Pedidos