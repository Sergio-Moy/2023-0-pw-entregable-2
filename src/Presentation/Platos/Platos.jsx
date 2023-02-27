import TopNav from '../Global/TopNav';
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"


function Platos(props){
    console.log("HOLLLAAA")
    const [listaPeliculas, setListaPeliculas] = useState([])
    const [listaCategorias, setlistaCategorias] = useState([])
    const [indice, setindice] = useState([])
    const listarow = []//Lista de filas
    const listacol = []//Lista de columnas
    const myStyle = {
        margin : "2.5%",
        height : "250px"
    }
    const filtrarPelicula = async function (categoriaId, restauranteId) {
        try {
            const response = await fetch(
                `https://restaurantes20194359.azurewebsites.net/backend/platos_10/listar?categoria=${categoriaId}&restaurante=${restauranteId}`
                )
            const data = await response.json()
            if(data.error===""){
                setListaPeliculas(data.platos_10)
            }else{
                console.error(data.error)
            }
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    const filtrarCategoria = async function (restauranteId) {
        try {
            const response = await fetch(
                `https://restaurantes20194359.azurewebsites.net/backend/categorias_10/listar?restaurante=${restauranteId}`
                )
            const data = await response.json()
            if(data.error===""){
                setlistaCategorias(data.pedidos)
            }else{
                console.error(data.error)
            }
        }catch(error) {
            console.error("Error de comunicacion")
        }
    }
    useEffect(function() {
        console.log("restaurante 1", sessionStorage.getItem("restaurante"))
        filtrarCategoria(sessionStorage.getItem("restaurante"))
    }, [])
    var obje = listaCategorias
    obje.forEach(function(value){
        listacol.push(
            value.nombre
            )
    })
    
    useEffect(function() {
        console.log("restaurante 2", sessionStorage.getItem("restaurante"))
        filtrarPelicula("-1",sessionStorage.getItem("restaurante"))
    }, [])
    var obj = listaPeliculas
    obj.forEach(function(value){
        listarow.push(
            {
                "producto":value.producto,
                "precio": value.precio,
                "imagen":value.imagen,
                "categoria":value.categoria.nombre
            }
            
            )
    })
    
    console.log("CERO",listacol)
    console.log("UNO",listarow)
    const imprimir = []
    for(let i = 0; i < listacol.length; i++){
        const temporal = []//Para reiniciar la lista
        for(let j = 0; j < listarow.length;j++){
            if (listarow[j].categoria === listacol[i]){
                let elemento = <article className='ITEMcard'>
                  <p className="clase_2">{listarow[j].producto}</p>
                  <br/>
                  <br/>
                  <p className="clase_3">{listarow[j].precio}</p>
                  <br/>
                  <div className="alinear_der">
                  <img src={listarow[j].imagen} width="300" height="250" />
                  </div>
                  
                </article>
                temporal.push(elemento)
            }
        }
        
        imprimir.push(
            <div>
                <h2 className="clase_1"> {listacol[i]} </h2>
                <br/>
                <div className="cuadro">
                <div className='ITEMcarrouselE'>{temporal}</div>
                </div>
                
                
                
            </div>
        )
        /*
        const temporal = []//Para reiniciar la lista
        for(let j = 0; j < listarow.length;j++){
            let comida = listarow[j].producto
            console.log("UNO",listarow[j].producto)
            if(listarow[j].categoria.nombre === listacol[i].nombre){
                let elemento = <div>
                {comida}
                </div>
                temporal.push(elemento)
            }
            
        }
        console.log("DOS",temporal)
        listacol.push(
            //<article className='card'>{temporal}</article>
            temporal
            )
            */
    }

    
   
    return <div>
        <TopNav category={3}/>
        <br/>
        <h1>Registrar una nueva categoria</h1>
        <br/>
        <div className="clase_0">
    <Link  to="/2023-0-pw-entregable-2/NuevaCategoria">Agregar Categoria</Link>
    </div>
        <br/>
        <h1>Platos a la Carta de {sessionStorage.getItem("restaurante")}</h1>
        <br/>
        <div>{imprimir}</div></div>
}
export default Platos