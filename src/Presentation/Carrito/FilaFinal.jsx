function FilaFinal(){
    let precio = 0
    const data = JSON.parse(sessionStorage.getItem("CARRITO")).arreglo

    for(let i = 0; i < data.length; i++){
        let producto = data[i].Precio * data[i].Cantidad
        precio = precio + producto
    }

    return <tr>
        <td style={{backgroundColor: "#00000000"}}></td>
        <td><b>Precio Total</b></td>
        <td><b>{precio}</b></td>
        <td><button type="button" className="btn btn-outline-light">Comprar</button></td>
        <td style={{backgroundColor: "#00000000"}}></td>

    </tr>
}

export default FilaFinal