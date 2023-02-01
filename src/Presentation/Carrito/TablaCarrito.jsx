import FilaCarrito from "./FilaCarrito";
import FilaFinal from "./FilaFinal"

function TablaCarrito(){
    let tabla = []

    const data = JSON.parse(sessionStorage.getItem("CARRITO")).arreglo

    for(let i = 0; i < data.length; i++){
        let producto = data[i]
        let fila = <FilaCarrito restaurante={producto.Restaurante} producto={producto.Producto} precio = {producto.Precio} cantidad = {producto.Cantidad}/>
        tabla.push(fila)
    }

    return <tbody>
        {tabla}
        <FilaFinal/>
    </tbody>
}

export default TablaCarrito