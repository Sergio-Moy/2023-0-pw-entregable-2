import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
    const [categorias, setCategorias] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
    const [categoriaID,setCategoriaId]=useState("");
    const [nombrePlato, setNombrePlato] = useState("");
    const [urlImagen, setUrlImagen] = useState("");
    const [precioPlato, setPrecioPlato] = useState("");
    const [restauranteId, setRestauranteId] = useState('');
  
    const categorias2 = async function (categoriaId) {
      try {
        const response = await fetch(
          `http://localhost:8000/backend/platosprueba?id=${categoriaId}`
        );
        const data = await response.json();
  
        if (data.error === "") {
          console.log(data);
          return data;
        } else {
          console.error(data.error);
        }
      } catch (error) {
        console.error("Error de comunicacion");
      }
    };
  
    const handleCategoriaSeleccionada = (event) => {
      setCategoriaSeleccionada(event.target.value);
      const categoriaId = categorias.find((c) => c.nombre === event.target.value)
        .id;
        setCategoriaId(categoriaId)
      categorias2(categoriaId);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:8000/backend/crearplato", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              restaurante: restauranteId,
              categoria: categoriaID,
              producto: nombrePlato,
              imagen: urlImagen,
              precio: precioPlato
            })
          });
          const data = await response.json();
          console.log(data);
          // hacer algo con la respuesta
        } catch (error) {
          console.error(error);
        }
      };
      
  
    useEffect(function () {
      async function fetchData() {
        const storedValue = sessionStorage.getItem("data");
        if (storedValue) {
          const value = JSON.parse(storedValue);
          const id = value.id;
          setRestauranteId(id)
          const data = await categorias2(id);
          setCategorias(data.categorias);
        }
      }
      fetchData();
    }, []);
    const regresar = function(){
      window.location.href='/2023-0-pw-entregable-2/bienvenida';
    }
  
    return (
      <div className='card' style={{height:'500px',margin:'auto'}}>
        <form onSubmit={handleSubmit}>
          <div className='centrar'>
          <label htmlFor="categoria">Categoría:</label>
        <select id="categoria" value={categoriaSeleccionada} onChange={handleCategoriaSeleccionada}>
          {categorias.map((c) => (
            <option key={c.id} value={c.nombre}>
              {c.nombre}
            </option>
          ))}
        </select>
          </div>
        <div className='centrar'>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" type="text" value={nombrePlato} onChange={(e) => setNombrePlato(e.target.value)} />
        </div>
        <div className='centrar'>
        <label>URL Imagen</label>
        <input type="text" value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} />
        </div>
        <div className='centrar'>
        <label>Precio</label>
        <input type="text" value={precioPlato} onChange={(e) => setPrecioPlato(e.target.value)} />
        
        </div >
        <div className='centrar'><button type="submit">Crear plato</button></div>
        <div className='centrar' style={{height:'50px',width:'50px'}}>
        <svg onClick={regresar} class="svg-icon" viewBox="0 0 20 20">
							<path d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>
						</svg>
        </div>
      </form>
      </div>
      
    );
  }
  
  export default App;