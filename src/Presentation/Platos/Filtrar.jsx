import TopNav from '../Global/TopNav';
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Platos from "./Platos"
import { Await, useNavigate } from "react-router-dom"
function Filtro(){
    const [listaCategorias, setListaCategorias] = useState([])
    const [Restaurante, setRestaurante] = useState('')
    const [error, setError] = useState("")
    const [rpta, setrpta] = useState("")
    const navigate = useNavigate()
        const obtenerCategoriasAsyncAwait = async function() {
          try {
                const response = await fetch(`https://restaurantes20194359.azurewebsites.net/backend/ObtenerSoloRestaurante_7/listar?codigo=-1`)
                const data = await response.json()//Se obtiene la data en forma de objeto
            if(data.error === ""){
                setListaCategorias(data.Pedidos)//Variable de estado
            }else{
                setError(data.error)
            }
            
           }catch(error) {
                 setError("Error obteniendo categorias")
           }
        }
        useEffect(function() {
           obtenerCategoriasAsyncAwait()
        }, [])
        console.log("LISTA CATEGORIA",listaCategorias)
    
    
    const FiltrarLista = []
    listaCategorias.map(function(cat){
        FiltrarLista.push(cat.nombre)
    })
    /*
    listaCategorias.map(function(cat){
        if(FiltrarLista.length >= 1){
                console.log("FILTRANDO")
                FiltrarLista.forEach(function(lista,index){
                    console.log("Repeticiones")
                    if(FiltrarLista[index]!== cat.restaurante.nombre){
                        console.log("ingreso")
                        FiltrarLista.push(cat.restaurante.nombre)
                     }
                })
        }else{
            console.log("NULO")
            FiltrarLista.push(cat.restaurante.nombre)
        }     
    })
    */
    console.log("FILTRADO",FiltrarLista)
    
    
   /*
    const FiltrarLista = listaCategorias.filter((item,index)=>{
        return listaCategorias.indexOf(item) === index;
      })
    */
    
    
    const Tabla = function(){
        console.log("Se hizo click",Restaurante)
        console.log("ERror??",error)
        if (error === "") {
          if (Restaurante!== "") {
            console.log("RPTAA_SOMOS",Restaurante)
            sessionStorage.setItem("restaurante", Restaurante)
            setrpta("True")
          }
        }
        else {
          return <h2>{error}</h2>
        }
    }
    const respuesta = function(){
        console.log("Funcion Respuesta",rpta)
        if(rpta!==""){
            navigate("/2023-0-pw-entregable-2/platos")
        }else{
            return <div></div>
        }
    }

    return <div>
    <TopNav category={1}/>
        <br/>
    <div className="mt-4 mb-4">
        <h1>Restaurantes</h1>
        <div>
            <br/>
    <select className="form-select"
        id = "Restaurante"
        value={Restaurante}
        onChange={(event) => setRestaurante(event.target.value)}
        >
            <option value="">Selecciona un Restaurante</option>
            {
                FiltrarLista.map(function(cat){
                    return <option value={ cat }>
                        { cat }
                    </option>
                })
                /*
                FiltrarLista.forEach(function(lista,index){
                    return <option value={ lista[index] }>
                        { lista[index] }
                    </option>
                })
                <button type="button" onClick={obtenerCategoriasAsyncAwait}>Realizar Filtro</button>
                */
            }
            </select>
            <br/>
            <br/>
            <div className='centrar'>
            <button type="button" onClick={Tabla}>Realizar Filtro</button>
            </div>
            </div>
            {respuesta()}
            
    </div>
    </div>
}
export default Filtro