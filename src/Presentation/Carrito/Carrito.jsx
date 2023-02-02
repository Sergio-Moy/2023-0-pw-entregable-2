import TopNav from '../Global/TopNav';
import TablaCarrito from './TablaCarrito';
import { Link } from "react-router-dom"

function Carrito(){

    /*DATOS DE PRUEBA - HASTA LINEA 25*/
    const p1 = {
        Restaurante: "Bembos",
        Producto: "Combo Cheese",
        Precio: 16.5,
        Cantidad: 1,
    }

    const p2 = {
        Restaurante: "Bembos",
        Producto: "Cono Vainilla",
        Precio: 2.5,
        Cantidad: 2,
    }
    
    const arr = JSON.stringify({
        arreglo : [p1, p2]
    })

    sessionStorage.setItem("CARRITO", arr)
    
    const data = JSON.parse(sessionStorage.getItem("CARRITO"))

    if (data === null || data === []){
        return <div>
        <TopNav category = {5}/>
        <br />
        <h1>Mi Carrito</h1>
        <h2 className='centrar'>Aún no tienes nada en tu Carrito</h2>
        <br />
        <Link to="/2023-0-pw-entregable-2/buscar" className='centrar'>Seguir mi pedido</Link>
        </div>
    }
    else{
        return <div>
        <TopNav category = {5}/>
        <br />
        <h1>Mi Carrito</h1>
    <table >
        <thead>
            <tr>
                <th><h2>Restaurante</h2></th>
                <th><h2>Producto</h2></th>
                <th><h2>Precio</h2></th>
                <th><h2>Cantidad</h2></th>
                <th></th>
            </tr>
        </thead>
            <TablaCarrito />
    </table>
    <br />
    <Link to="/2023-0-pw-entregable-2/buscar" className='centrar'>Seguir mi pedido</Link>
    </div>
    }
}

export default Carrito