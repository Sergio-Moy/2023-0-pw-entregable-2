function FilaCarrito(props){
    return <tr>
        <td>{props.restaurante}</td>
        <td>{props.producto}</td>
        <td>{props.precio}</td>
        <td>{props.cantidad}</td>
        <td><button type="button" className="btn btn-outline-light">-</button>
        <button type="button" className="btn btn-outline-light">+</button></td>
    </tr>
}

export default FilaCarrito