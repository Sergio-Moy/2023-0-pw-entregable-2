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
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="categoria">Categoría:</label>
        <select id="categoria" value={categoriaSeleccionada} onChange={handleCategoriaSeleccionada}>
          {categorias.map((c) => (
            <option key={c.id} value={c.nombre}>
              {c.nombre}
            </option>
          ))}
        </select>
        <label htmlFor="nombre">Nombre:</label>
        <input id="nombre" type="text" value={nombrePlato} onChange={(e) => setNombrePlato(e.target.value)} />
        <label>URL Imagen</label>
        <input type="text" value={urlImagen} onChange={(e) => setUrlImagen(e.target.value)} />
        <label>Precio</label>
        <input type="text" value={precioPlato} onChange={(e) => setPrecioPlato(e.target.value)} />
        <button type="submit">Crear plato</button>
      </form>
    );
  }
  
  export default App;