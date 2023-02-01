import FilaSeguimiento from "./FilaSeguimiento"

function TablaSeguimiento(){
    
   const arreglo = JSON.parse(sessionStorage.getItem("PEDIDOSMATCH")).arreglo

   let tabla = []

   for(let i = 0; i<arreglo.length; i++){
        let data = arreglo[i]
        tabla.push( <FilaSeguimiento restaurante = {data.Restaurante} producto = {data.Producto} estado = {data.Estado}/>)
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