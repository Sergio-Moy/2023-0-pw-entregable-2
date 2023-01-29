import TopNav from "../Global/TopNav"
import FilaSeguimiento from "./FilaSeguimiento"

function Seguimiento(){
    return <div>
        <TopNav category={5}/>
        <br />
        <table>
            <thead>
                <th><h2>Restaurante</h2></th>
                <th><h2>Pedido</h2></th>
                <th><h2>Estado</h2></th>
            </thead>
            <tbody>
                <FilaSeguimiento/>
                <FilaSeguimiento/>
            </tbody>
        </table>
        <br />
        <p className="centrar">Recoge tus productos listos con el código <b>123654</b></p>
    </div>
}

export default Seguimiento