import { useState } from "react"
import Listapedidos from '../Pedidos/Componentes/ListaPedidos';
import VinetaPedidos from "./Componentes/VinetaPedidos";
import TopNav from '../Global/TopNav';
import { Link } from "react-router-dom";
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
            <br />
            <h2 className="centrar">Acciones de Restaurante</h2>
            <Link to="/2023-0-pw-entregable-2/estados" className="centrar">Modificar el estado de un pedido</Link>
            <Link to="/2023-0-pw-entregable-2/pedidoregistro" className="centrar">Registrar un pedido</Link>
            <Link to="/2023-0-pw-entregable-2/registrarentrega" className="centrar">Registrar una entrega</Link>
            <Link to="/2023-0-pw-entregable-2/platos" className="centrar">Administrar platos</Link>
            
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
            <h2 className="centrar">Acciones de Restaurante</h2>
            <Link to="/2023-0-pw-entregable-2/estados" className="centrar">Modificar el estado de un pedido</Link>
            <Link to="/2023-0-pw-entregable-2/pedidoregistro" className="centrar">Registrar un pedido</Link>
            <Link to="/2023-0-pw-entregable-2/registrarentrega" className="centrar">Registrar una entrega</Link>
            <Link to="/2023-0-pw-entregable-2/platos" className="centrar">Administrar platos</Link>
        </div>
    }
    
}
export default Pedidos