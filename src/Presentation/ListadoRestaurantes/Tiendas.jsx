import { useEffect, useState } from 'react'

function Tiendas(props){

    const [listaTiendas, setListaTiendas] = useState([])

    const obtenerTiendas = async function(){
        try{
            const response = await fetch("http://localhost:8000/backend/listado?categoria=5")
            const data = await response.json()
            setListaTiendas(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }

    useEffect(function(){
        obtenerTiendas()
    },[])

    let tabla = []
    for (let i = 0; i< listaTiendas.length; i++){
        let Tienda = listaTiendas[i]
        let fila
        if(Tienda.estado == 1){
            fila = <tr><td>
            {Tienda.nombre} <img src={Tienda.imagen} alt="icon" style={props.myStyle}/>
        </td></tr>
        }
        else{
            fila = <tr><td className='closed'>
            {Tienda.nombre} <img src={Tienda.imagen} alt="icon" style={props.myStyle}/>
        </td></tr>
        }
        tabla.push(fila)
    }

    return <table>
    <tbody>
        {tabla}
    </tbody>
</table>
}
 export default Tiendas