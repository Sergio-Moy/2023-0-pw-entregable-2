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
            <div className='centrar'>
                <div className='card'>
                <li key={plato.id}>
            <p>pedido: {plato.producto}</p>
            <p>cantidad : {plato.cantidad}</p>
            <p>codigo de verificación:{plato.codigo_verificacion}</p>
            <p>precio: S/.{plato.precio}</p>
            <p>Precio total: S/. {plato.precio * plato.cantidad}</p>
            <p>cliente: {plato.cliente_nombre}</p>
            <p>Estado: {plato.estado === 1 ? "confirmado" : plato.estado === 2 ? "en preparación" : "entregado"}</p>
          </li>
            </div>
            </div>
            
          
        ))}
      </ul>
    </div>
  );
}

export default PedidosRealizados;
