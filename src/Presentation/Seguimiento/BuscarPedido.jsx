import { useNavigate } from "react-router-dom"
import TopNav from "../Global/TopNav"
import BuscarForm from "./BuscarForm"


function BuscarPedido(){
    /*DATOS DE PRUEBA - HASTA LINEA 35*/
    const p1 = {
        Codigo: "12345",
        Restaurante: "Bembos",
        Producto: "Combo Cheese",
        Cantidad: 1,
        Estado: "En preparación"
    }
    const p2 = {
        Codigo: "12345",
        Restaurante: "Cafeteria F",
        Producto: "Salchipapas",
        Cantidad: 2,
        Estado: "Listo"
    }
    const p3 = {
        Codigo: "54321",
        Restaurante: "Bembos",
        Producto: "Cono Vainilla",
        Cantidad: 1,
        Estado: "Listo"
    }

    const arr = JSON.stringify({
        arreglo : [p1, p2, p3]
    })

    sessionStorage.setItem("PEDIDOS", arr)

    const navigate = useNavigate()

    const SeguimientoOk = function(){
        navigate("/2023-0-pw-entregable-2/seguimiento")
    }

    return <div>
        <TopNav category = {5}/>
        <h1>Buscar pedido</h1>
        <BuscarForm SeguimientoOk={SeguimientoOk}/>
    </div>
}

export default BuscarPedido