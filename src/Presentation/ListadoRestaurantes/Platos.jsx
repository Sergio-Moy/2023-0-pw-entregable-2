import { useEffect, useState } from 'react'

function Platos(props){

    const [listaPlatos, setListaPlatos] = useState([])

    const obtenerPlatos = async function(){
        try{
            const response = await fetch("http://localhost:8000/backend/listado?categoria=3")
            const data = await response.json()
            setListaPlatos(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }

    useEffect(function(){
        obtenerPlatos()
    },[])

    let tabla = []
    for (let i = 0; i< listaPlatos.length; i++){
        let Plato = listaPlatos[i]
        let fila
        if(Plato.estado == 1){
            fila = <tr><td>
            {Plato.nombre} <img src={Plato.imagen} alt="icon" style={props.myStyle}/>
        </td></tr>
        }
        else{
            fila = <tr><td className='closed'>
            {Plato.nombre} <img src={Plato.imagen} alt="icon" style={props.myStyle}/>
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
 export default Platos