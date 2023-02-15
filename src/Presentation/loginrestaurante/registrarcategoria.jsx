import React, { useState, useEffect } from 'react';


function NuevaCategoria() {
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
      const response = await fetch("http://localhost:8000/backend/nuevacategoria", {
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
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombreCategoria">Nombre de la categoría:</label>
      <input id="nombreCategoria" type="text" value={nombreCategoria} onChange={(e) => setNombreCategoria(e.target.value)} />
      <button type="submit">Crear categoría</button>
    </form>
  );
}

export default NuevaCategoria;