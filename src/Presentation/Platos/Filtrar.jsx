import TopNav from '../Global/TopNav';
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Platos from "./Platos"
function Filtro(){
    const [listaCategorias, setListaCategorias] = useState([])
    const [Restaurante, setRestaurante] = useState('');
    
        const obtenerCategoriasAsyncAwait = async function() {
          try {
                const response = await fetch(`http://localhost:8000/backend/categorias_10/listar?restaurante=-1`)
                const data = await response.json()//Se obtiene la data en forma de objeto
            
            if(data.error === ""){
                setListaCategorias(data.pedidos)//Variable de estado
            }else{
                console.error(data.error)
            }
            
           }catch(error) {
                 console.error("Error obteniendo categorias")
           }
        }
        useEffect(function() {
           obtenerCategoriasAsyncAwait()
        }, [])
        console.log("LISTA CATEGORIA",listaCategorias)
    
    const FiltrarLista = []
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
    console.log("FILTRADO",FiltrarLista)
    
    return <div>
    <TopNav category={3}/>
        <br/>
        <h1>Registrar una nueva categoria</h1>
        <br/>
        <div class="clase_0">
    <Link  to="/2023-0-pw-entregable-2/NuevaCategoria">Agregar Categoria</Link>
    </div>
    <div className="mt-4 mb-4">
        <h1>Restaurantes</h1>
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
        <Platos 
                restaurante={ Restaurante } />
    </div>
    </div>
}
export default Filtro