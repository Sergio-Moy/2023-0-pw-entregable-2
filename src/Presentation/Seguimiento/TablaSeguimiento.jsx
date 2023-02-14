import FilaSeguimiento from "./FilaSeguimiento"

function TablaSeguimiento(){
    
   const arreglo = JSON.parse(sessionStorage.getItem("PEDIDOSMATCH")).arreglo

   let tabla = []

   for(let i = 0; i<arreglo.length; i++){
        let data = arreglo[i]
        console.log("SOMOS",data)
        tabla.push( <FilaSeguimiento restaurante = {data.restaurante.nombre} producto = {data.producto} estado = {data.estado}/>)
   }

    return <table>
        <thead>
            <tr>
                <th>Restaurante</th>
                <th>Producto</th>
                <th>Estado</th>
            </tr>
        </thead>
        <tbody>
            {tabla}
        </tbody>
    </table>
}

export default TablaSeguimiento