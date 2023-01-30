import FilaSeguimiento from "./FilaSeguimiento"

function TablaSeguimiento(){
    let tabla = []
    let datos =  JSON.parse(sessionStorage.getItem("PEDIDOSMATCH"))
    let data = [
        {Restaurante : "bebmos",
    Producto : "aaaa",
    Estado : "listo"}
    ]


    for(let i = 0; i < data.length; i++){
        let fila = <FilaSeguimiento restaurante={data[i].Restaurante} producto={data[i].Producto} estado={data[i].Estado}/>
        tabla.push(fila)
    }
    return tabla
}

export default TablaSeguimiento()