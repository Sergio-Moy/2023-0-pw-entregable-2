import { useEffect, useState } from 'react'

function FoodTrucks(props){

    const [listaFoodTrucks, setListaFoodTrucks] = useState([])

    const obtenerFoodTrucks = async function(){
        try{
            const response = await fetch("http://localhost:8000/backend/listado?categoria=2")
            const data = await response.json()
            setListaFoodTrucks(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }

    useEffect(function(){
        obtenerFoodTrucks()
    },[])

    let tabla = []
    for (let i = 0; i< listaFoodTrucks.length; i++){
        let FoodTruck = listaFoodTrucks[i]
        let fila
        if(FoodTruck.estado == 1){
            fila = <tr><td>
            {FoodTruck.nombre} <img src={FoodTruck.imagen} alt="icon" style={props.myStyle}/>
        </td></tr>
        }
        else{
            fila = <tr><td className='closed'>
            {FoodTruck.nombre} <img src={FoodTruck.imagen} alt="icon" style={props.myStyle}/>
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
 export default FoodTrucks