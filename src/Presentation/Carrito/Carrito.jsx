import TopNav from '../Global/TopNav';
import FilaCarrito from './FilaCarrito';


function Carrito(){
    return <div>
        <TopNav category = {5}/>
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
            <FilaCarrito/>
            <FilaCarrito/>
        </thead>
    </table>
    </div>
}

export default Carrito