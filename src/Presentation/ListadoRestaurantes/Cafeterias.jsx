import { useEffect, useState } from 'react'

function Cafeterias(props){

    const [listaCafeterias, setListaCafeterias] = useState([])

    const obtenerCafeterias = async function(){
        try{
            const response = await fetch("http://localhost:8000/backend/listado?categoria=1")
            const data = await response.json()
            setListaCafeterias(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }

    useEffect(function(){
        obtenerCafeterias()
    },[])

    let tabla = []
    for (let i = 0; i< listaCafeterias.length; i++){
        let cafeteria = listaCafeterias[i]
        let fila
        if(cafeteria.estado == 1){
            fila = <tr><td>
            {cafeteria.nombre} <img src={cafeteria.imagen} alt="icon" style={props.myStyle}/>
        </td></tr>
        }
        else{
            fila = <tr><td className='closed'>
            {cafeteria.nombre} <img src={cafeteria.imagen} alt="icon" style={props.myStyle}/>
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
 export default Cafeterias