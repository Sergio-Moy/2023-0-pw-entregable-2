import React, { useState } from 'react';
import TopNav from '../Global/TopNav';
const Pedido = ({ pedido }) => {
  const [status, setStatus] = useState(pedido.status);

  const handlePreparadoClick = () => {
    setStatus('preparado');
  };

  const handleTerminadoClick = () => {
    setStatus('terminado');
  };

  return (
        <tr>

            <td>{pedido.id}</td>
            <td>{pedido.detalles}</td>
            <td>{pedido.status}</td>
            <td><div>
        {status === 'pendiente' && (
          <>
            <button onClick={handlePreparadoClick}>Preparado</button>
            <button onClick={handleTerminadoClick}>Terminado</button>
          </>
        )}
        {status === 'preparado' && (
            pedido.status='preparado',
          <button onClick={handleTerminadoClick}>Terminado</button>
        )}
        {status === 'terminado' && (pedido.status='terminado',<div>Pedido Terminado</div>)}
      </div></td>
      
        </tr>
  );
};

const Estados = () => {
  const pedidos = [
    {
      id: 1,
      detalles: 'Hamburguesa con queso',
      status: 'pendiente',
    },
    {
      id: 2,
      detalles: 'Pizza pepperoni',
      status: 'pendiente',
    },
    {
      id: 3,
      detalles: 'Ensalada César',
      status: 'pendiente',
    },
  ];

  return (
    <div>
        <TopNav category ={3}/>
        <div className="centrar" style={{width:"100%"}}>
        <div style={{width:"100%"}}><table >
        <tr>
            <th><h3>ID</h3></th>
            <th><h3>DESCRIPCIÓN</h3></th>
            <th><h3>Estado</h3></th>
            <th><h3>Botón Acción</h3></th>
        </tr>
      {pedidos.map((pedido) => (
        <Pedido key={pedido.id} pedido={pedido} />
      ))}
      </table>
    </div>
    </div>
    </div>
    
  );
};

export default Estados;
