import TopNav from "../Global/TopNav"

import TablaSeguimiento from "./TablaSeguimiento"
import { useEffect, useState } from "react"

function Seguimiento(){
    const codigo = JSON.parse(sessionStorage.getItem("CODIGO_BUSCADO"))
    const [listaPeliculas, setListaPeliculas] = useState([])
    //Obtener lista de peliculas filtradas por categoria

    const filtrarPelicula = async function (codigoId) {
        try {
            const response = await fetch(
                `http://localhost:8000/backend/ObtenerPedidos_8/listar?codigo=${codigoId}`
                )
            const data = await response.json()
            if(data.error===""){
                setListaPeliculas(data.Pedidos)
                console.log("ListaPedidos",data.Pedidos)
            }else{
                console.error(data.error)
            }
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    useEffect(function() {
        filtrarPelicula(codigo)
    }, [])
    //Caso 1:
    console.log("hola")
    console.log("Lista",listaPeliculas)
    
    const arr = JSON.stringify({
        arreglo : [listaPeliculas]
    })

    let lista = []

    const parsed = JSON.parse(arr)
    const arreglo = parsed.arreglo
    console.log("Efe")
    console.log(arreglo)
    
    for(let i = 0; i < arreglo[0].length; i++){
        let prod = arreglo[0][i]
        console.log("PEPE")
        lista.push(prod)
    }

    const data = JSON.stringify({arreglo : lista})

    sessionStorage.setItem("PEDIDOSMATCH" , data)

    if(lista.length==0){
        return <div>
            <TopNav category={5}/>
            <br />
            <h1>Error al seguir el pedido {codigo}</h1>
            <h2 className="centrar">Este pedido ha sido terminado o no existe</h2>
        </div>
    }
    else{
        return <div>
            <TopNav category = {5}/>
            <h1>Seguimiento del pedido {codigo}</h1>
            <br />
            <TablaSeguimiento/>
            <p className="centrar">Recoge tus items listos con el código de confirmación <b>{codigo}</b></p>
        </div>
    }
}

export default Seguimiento