import React, { useState, useEffect } from 'react';

function PedidosRealizados() {
  const [platosRegistrados, setPlatosRegistrados] = useState([]);
  const [restauranteId, setRestauranteId] = useState('');

  useEffect(() => {
    const storedValue = sessionStorage.getItem('data');
    if (storedValue) {
      const value = JSON.parse(storedValue);
      setRestauranteId(value.id);
    }
  }, []);

  useEffect(() => {
    const fetchPlatosRegistrados = async () => {
      if (restauranteId) {
        const response = await fetch(`http://localhost:8000/backend/platospedidos?id=${restauranteId}`);
        const data = await response.json();
        setPlatosRegistrados(data.platos);
        console.log(data);
      }
    };
    fetchPlatosRegistrados();
  }, [restauranteId]);

  return (
    <div>
      <h1>Pedidos realizados</h1>
      <ul>
        {platosRegistrados.map((plato) => (
          <li key={plato.id}>
            <p>{plato.producto}</p>
            <p>{plato.cantidad}</p>
            <p>{plato.precio}</p>
            <p>{plato.cliente}</p>
            <p>{plato.estado}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PedidosRealizados;
