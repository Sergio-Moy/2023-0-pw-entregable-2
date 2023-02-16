import TopNav from '../Global/TopNav';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Recomendaciones(){
    const myStyle = {
        margin : "2.5%",
        height : "250px"
    }
    const navigate = useNavigate()

    const [listaRecomendaciones, setListaRecomendaciones] = useState([])

    const obtenerRecomendaciones = async function(){
        try{
            const response = await fetch("http://localhost:8000/backend/recomendaciones")
            const data = await response.json()
            setListaRecomendaciones(data.recomendaciones)
        }
        catch(error){
            console.error("Hubo un error obteniendo las recomendaciones")
        }
    }

    useEffect(function(){
        obtenerRecomendaciones()
    }, [])

    let carrusel = []
    for(let i = 0; i < listaRecomendaciones.length; i++){
        let articulo = listaRecomendaciones[i]
        let elemento = <article className='card'>
                <img src={articulo.imagen} alt="imagen" style={myStyle}/>
                <p style={{textAlign: "center"}}>{articulo.texto}</p>
            <button type='button' onClick={function(){navigate("/2023-0-pw-entregable-2/ofertas")}}>¡Lo quiero!</button>
            <br />
            </article>
        carrusel.push(elemento)
    }

    return <div>
        <TopNav category ={4}/>
        <br />
        <h1>Recomendaciones</h1>
        <div className='carrousel'>
            {carrusel}
        </div>
    </div>
}

export default Recomendaciones