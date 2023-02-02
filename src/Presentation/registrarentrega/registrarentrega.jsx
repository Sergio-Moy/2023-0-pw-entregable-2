import React, { useState } from 'react';

const productDetails = [
  { code: '1', description: 'Hamburguesa de queso', address: 'Los Olivos' },
  { code: '2', description: 'Pizza Hawaiana', address: 'Santiago de surco' },
  { code: '3', description: 'Makis', address: 'Pueblo Libre' },
];

function Registrarentrega({ onSubmit }) {
    const [code, setCode] = useState('');
    const [deliveryDetails, setDeliveryDetails] = useState({});
    const [deliveries, setDeliveries] = useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const product = productDetails.find(
        (product) => product.code === code
      );
  
      if (!product) {
        return;
      }
  
      if (deliveries.find((delivery) => delivery.code === code)) {
        return alert(`El producto con código ${code} ya ha sido entregado.`);
      }
  
      setDeliveries([
        ...deliveries,
        {
          code,
          deliveryDetails,
          description: product.description,
          address: product.address,
        },
      ]);
      onSubmit({ code, deliveryDetails });
    };
  
    const handleClear = () => {
      setDeliveries([]);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="code">Código de verificación:</label>
            <input
              type="text"
              id="code"
              value={code}
              onChange={(event) => setCode(event.target.value)}
            />
          </div>
          {/* Otros campos para los detalles de la entrega */}
          <button type="submit">Registrar entrega</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Dirección</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr key={index}>
                <td>{delivery.code}</td>
                <td>{delivery.description}</td>
                <td>{delivery.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleClear}>Limpiar tabla</button>
      </div>
    );
  }

export default Registrarentrega;