import TopNav from "../Global/TopNav"
import FilaSeguimiento from "./FilaSeguimiento"

function Seguimiento(){
    if(false){
        return <div>
            <TopNav category={5}/>
            <br />
            <h1>Seguimiento de Pedido</h1>
            <h2 className="centrar">No tienes ningún pedido pendiente</h2>
        </div>
    }
    else{
        return <div>
        <TopNav category={5}/>
        <br />
        <h1>Seguimiento de Pedido</h1>
        <table>
            <thead><tr>
                <th><h2>Restaurante</h2></th>
                <th><h2>Pedido</h2></th>
                <th><h2>Estado</h2></th>
                </tr></thead>
            <tbody>
                <FilaSeguimiento/>
                <FilaSeguimiento/>
            </tbody>
        </table>
        <br />
        <p className="centrar">Recoge tus productos listos con el código <b>123654</b></p>
    </div>
    }
}

export default Seguimiento