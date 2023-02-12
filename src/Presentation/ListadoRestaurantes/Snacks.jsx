import { useEffect, useState } from 'react'

function Snacks(props){

    const [listaSnacks, setListaSnacks] = useState([])

    const obtenerSnacks = async function(){
        try{
            const response = await fetch("http://localhost:8000/backend/listado?categoria=4")
            const data = await response.json()
            setListaSnacks(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }

    useEffect(function(){
        obtenerSnacks()
    },[])

    let tabla = []
    for (let i = 0; i< listaSnacks.length; i++){
        let Snacks = listaSnacks[i]
        let fila
        if(Snacks.estado == 1){
            fila = <tr><td>
            {Snacks.nombre} <img src={Snacks.imagen} alt="icon" style={props.myStyle}/>
        </td></tr>
        }
        else{
            fila = <tr><td className='closed'>
            {Snacks.nombre} <img src={Snacks.imagen} alt="icon" style={props.myStyle}/>
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
 export default Snacks