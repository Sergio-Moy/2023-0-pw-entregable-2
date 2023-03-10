import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function NuevaCategoria() {
  const navigate = useNavigate()
  const [nombreCategoria, setNombreCategoria] = useState('');
  const [restauranteId, setRestauranteId] = useState('');


  useEffect(function () {
    async function fetchData() {
      const storedValue = sessionStorage.getItem("data");
      if (storedValue) {
        const value = JSON.parse(storedValue);
        const id = value.id;
        setRestauranteId(id)

      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://restaurantes20194359.azurewebsites.net/backend/nuevacategoria", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          restaurante: restauranteId,
          nombre: nombreCategoria
        })
      });
      const data = await response.json();
      console.log(data);
      // hacer algo con la respuesta
    } catch (error) {
      console.error(error);
    }
  };
  const regresar = function(){
    navigate('/2023-0-pw-entregable-2/bienvenida');
  }
  
  return (
    <div className='card' style={{margin:'auto'}}>
      <form onSubmit={handleSubmit}>
        <div className='centrar'>
        <label htmlFor="nombreCategoria">Nombre de la categoría:</label>
      <input id="nombreCategoria" type="text" value={nombreCategoria} onChange={(e) => setNombreCategoria(e.target.value)} />
        </div>
      
      <button className='centrar' type="submit">Crear categoría</button>
      <div className='centrar' style={{height:'50px',width:'50px'}}>
        <svg onClick={regresar} class="svg-icon" viewBox="0 0 20 20">
							<path d="M3.24,7.51c-0.146,0.142-0.146,0.381,0,0.523l5.199,5.193c0.234,0.238,0.633,0.064,0.633-0.262v-2.634c0.105-0.007,0.212-0.011,0.321-0.011c2.373,0,4.302,1.91,4.302,4.258c0,0.957-0.33,1.809-1.008,2.602c-0.259,0.307,0.084,0.762,0.451,0.572c2.336-1.195,3.73-3.408,3.73-5.924c0-3.741-3.103-6.783-6.916-6.783c-0.307,0-0.615,0.028-0.881,0.063V2.575c0-0.327-0.398-0.5-0.633-0.261L3.24,7.51 M4.027,7.771l4.301-4.3v2.073c0,0.232,0.21,0.409,0.441,0.366c0.298-0.056,0.746-0.123,1.184-0.123c3.402,0,6.172,2.709,6.172,6.041c0,1.695-0.718,3.24-1.979,4.352c0.193-0.51,0.293-1.045,0.293-1.602c0-2.76-2.266-5-5.046-5c-0.256,0-0.528,0.018-0.747,0.05C8.465,9.653,8.328,9.81,8.328,9.995v2.074L4.027,7.771z"></path>
						</svg>
        </div>
    </form>

    </div>
    
  );
}

export default NuevaCategoria;