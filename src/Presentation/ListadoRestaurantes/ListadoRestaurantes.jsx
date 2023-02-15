import TopNav from '../Global/TopNav';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';


function ListadoRestaurantes(){
    const [categoria, setCategoria] = useState(0)

    const ShowRestaurantes = function(props){
        const [listaRestaurantes, setListaRestaurantes] = useState([])

    const ObtenerRestaurantes = async function(){
        try{
            const response = await fetch(`http://localhost:8000/backend/listado?categoria=${props.categoria}`)
            const data = await response.json()
            setListaRestaurantes(data.restaurantes)
        }
        catch(error){
            console.error("Hubo un error obteniendo los restaurantes")
        }
    }
    let content = []
    useEffect(function(){ObtenerRestaurantes()}, [])
    for (let i = 0; i < listaRestaurantes.length; i++){
        let rest = listaRestaurantes[i]
        let elemento
        if (rest.estado === 1) {
            elemento = <div className='col-md-3'>
            <img src={rest.imagen} alt={rest.nombre} style={{width: "40%"}}/>
            {rest.nombre}
        </div>
        } else {
            elemento = <div className='closed col-md-3'>
            <img src={rest.imagen} alt={rest.nombre} style={{width: "40%"}}/>
            {rest.nombre}
        </div> 
        }
        content.push(elemento)
    }
    return <div className='row'>
        {content}
    </div>
    }
    const PickerCategorias = function(){
        const categorias = ["Todos","Cafeterias","Food Trucks","Platos","Snacks","Tiendas"]
        let content = []
        for (let i = 0; i<6; i++){
            let elemento = <div className='col centrar'><button type='btn' onClick={function(){
                setCategoria(i)
            }}>{categorias[i]}</button></div>
            content.push(elemento)
        }
        return <div>
            <div className='row'>
                {content}
            </div>
            <br />
            <ShowRestaurantes categoria={categoria}/>
        </div>
    }

    return <div>
        <TopNav category = {1}/>
        <br />
        <PickerCategorias/>
        <div className='row'>
            <div className='col'></div>
            <div className='col centrar'>
                <h2>Acciones de comensal</h2>
                <Link to="/2023-0-pw-entregable-2/agregarcarrito" style={{margin : "1%"}}>Agregar un plato al carrito</Link>
                <br />
                <Link to="/2023-0-pw-entregable-2/categorias" style={{margin : "1%"}}>Ver categorías de platos</Link>
                <br />
                <Link to="/2023-0-pw-entregable-2/ofertas" style={{margin : "1%"}}>Ver Ofertas</Link>
                </div>
            <div className='col'></div>
        </div>
    </div>
}

export default ListadoRestaurantes