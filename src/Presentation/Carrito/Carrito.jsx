import TopNav from '../Global/TopNav';
import TablaCarrito from './TablaCarrito';

function Carrito(){

    /*DATOS DE PRUEBA*/
    /*const p1 = {
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

    sessionStorage.setItem("CARRITO", arr)*/
    
    const data = JSON.parse(sessionStorage.getItem("CARRITO"))

    if (data === null || data === []){
        return <div>
        <TopNav category = {5}/>
        <br />
        <h1>Mi Carrito</h1>
        <h2 className='centrar'>Aún no tienes nada en tu Carrito</h2>
        <br />
        <a href="/buscar" className='centrar'>Seguir mi pedido</a>
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
    <a href="/buscar" className='centrar'>Seguir mi pedido</a>
    </div>
    }
}

export default Carrito