import TopNav from "../Global/TopNav"
import FilaSeguimiento from "./FilaSeguimiento"
import TablaSeguimiento from "./TablaSeguimiento"

function Seguimiento(props){
    const codigo = JSON.parse(sessionStorage.getItem("CODIGO_BUSCADO"))
    const arr = []
    const pedidos = JSON.parse(sessionStorage.getItem("PEDIDOS")).arreglo
    for(let i = 0; i< pedidos.length; i++){
        if(pedidos[i].Codigo == codigo){
            arr.push(pedidos[i])
        }
    }
    const pedidosmatch = JSON.stringify({data : arr})
    sessionStorage.setItem("PEDIDOSMATCH", pedidosmatch)
    if(false){
        return <div>
            <TopNav category={5}/>
            <br />
            <h1>Seguimiento del pedido {codigo}</h1>
            <h2 className="centrar">Este pedido no tiene items pendientes</h2>
        </div>
    }
    else{
        return <div>
        <TopNav category={5}/>
        <br />
        <h1>Seguimiento del pedido {codigo}</h1>
        <table>
            <thead><tr>
                <th><h2>Restaurante</h2></th>
                <th><h2>Pedido</h2></th>
                <th><h2>Estado</h2></th>
                </tr></thead>
            <tbody>
                <TablaSeguimiento/>
            </tbody>
        </table>
        <br />
        <p className="centrar">Recoge tus productos listos con el código <b>123654</b></p>
    </div>
    }
}

export default Seguimiento