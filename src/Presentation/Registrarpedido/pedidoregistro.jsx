import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 },
];

function Pedidoregistro({ onSubmit }) {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedProductId) {
      return;
    }

    const selectedProduct = products.find(
      (product) => product.id === selectedProductId
    );

    onSubmit({
      product: selectedProduct,
      quantity,
      address,
      deliveryDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="product">Producto:</label>
        <select
          id="product"
          value={selectedProductId || ''}
          onChange={(event) =>
            setSelectedProductId(Number(event.target.value))
          }
        >
          <option value="">Seleccione un producto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="quantity">Cantidad:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(event) => setQuantity(Number(event.target.value))}
        />
      </div>
      <div>
        <label htmlFor="address">Dirección de entrega:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="deliveryDate">Fecha de entrega:</label>
        <input
          type="date"
          id="deliveryDate"
          value={deliveryDate}
          onChange={(event) => setDeliveryDate(event.target.value)}
        />
      </div>
      <button type="submit">Realizar pedido</button>
    </form>
  );
}
export default Pedidoregistro;