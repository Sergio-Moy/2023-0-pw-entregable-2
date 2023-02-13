import { useNavigate } from "react-router-dom"
import TopNav from "../Global/TopNav"
import BuscarForm from "./BuscarForm"
import { useEffect, useState } from "react"

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

    const listarow = []//Lista de filas
    //let listaCategoria =["Bebidas","Pescados y Mariscos","Carnes"]//Nombre de Categorias
    const [listaPeliculas, setListaPeliculas] = useState([])
    //Obtener lista de peliculas filtradas por categoria

    const filtrarPelicula = async function (codigoId) {
        try {
            const response = await fetch(
                `http://localhost:8000/backend/ObtenerPedidos_8/listar?codigo=${codigoId}`
                )
            const data = await response.json()
            if(data.error===""){
                setListaPeliculas(data.pedidos)
            }else{
                console.error(data.error)
            }
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    useEffect(function() {
        filtrarPelicula(-1)
    }, [])
    //Caso 1:
    console.log("hola")
    console.log(listaPeliculas)
    
    const arr = JSON.stringify({
        arreglo : [listaPeliculas]
    })

    console.log("Adios")
    console.log(arr)

    //Caso 2:
    console.log("WWWW")
    console.log([p1,p2,p3])
    
    const arr3 = JSON.stringify({
        arreglo : [p1,p2,p3]
    })

    console.log("XXXX")
    console.log(arr3)

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