import { useState } from "react"
import Listapedidos from '../Pedidos/Componentes/ListaPedidos';
import VinetaPedidos from "./Componentes/VinetaPedidos";
import TopNav from '../Global/TopNav';
function Pedidos(){
    //ASDF
    const listPedidos = [
        {
            id : 1,
            Restaurante: "Cafeteria F",
            Codigo : 20201166,
            Producto : "Ceviche",
            Precio: 18.5,
            Cantidad: 1,
            Estado: "Enviando al Cliente"
        },
        {
            id : 2,
            Restaurante: "Cafeteria F",
            Codigo : 20201167,
            Producto : "Bisteck",
            Precio: 21.5,
            Cantidad: 1,
            Estado: "Enviando al Cliente"
        },
        {
            id : 3,
            Restaurante: "Cafeteria F",
            Codigo : 20201167,
            Producto : "Inca Cola (1.5L)",
            Precio: 6.5,
            Cantidad: 2,
            Estado: "Enviando al Cliente"
        }
       ]
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