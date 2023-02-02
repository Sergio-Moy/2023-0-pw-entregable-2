import React, { useState } from 'react';
import TopNav from '../Global/TopNav';
const Pedidoregistro = () => {
  const [order, setOrder] = useState({
    name: '',
    address: '',
    date: '',
    dish: ''
  });
  const [orders, setOrders] = useState([]);

  const handleInputChange = event => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setOrders([...orders, order]);
    setOrder({ name: '', address: '', date: '', dish: '' });
  };
  const onClearOrders = () => {
    setOrders([]);
  };

  return (
    <div>
      <TopNav category ={3}/>
      <div className='centrar'>
    <form onSubmit={handleSubmit} style={{paddingTop:'30px'}}>
      <div className='form-group'><input
      type="text"
      name="name"
      value={order.name}
      onChange={handleInputChange}
      placeholder="Nombre"
    /></div>
    <div className='form-group'>
    <input
      type="text"
      name="address"
      value={order.address}
      onChange={handleInputChange}
      placeholder="Dirección"
    />
    </div>
    <div className='form-group'>
    <input
      type="date"
      name="date"
      value={order.date}
      onChange={handleInputChange}
      placeholder="Date"
    />
    </div>
    
    <select
      name="dish"
      value={order.dish}
      onChange={handleInputChange}
    >
      <option value="">Selecciona un plato</option>
      <option value="Pizza">Pizza</option>
      <option value="Pasta">Pasta</option>
      <option value="Salad">Salad</option>
    </select>
    <button type="submit">Realizar pedido</button>
    
  </form>
  
  </div>
  <OrderTable orders={orders} />
    <button onClick={onClearOrders}>Limpiar carrito</button>
    </div>
    
    
    
  );
};

const OrderTable = ({ orders }) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Día</th>
        <th>Plato</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => (
        <tr key={index}>
          <td>{order.name}</td>
          <td>{order.address}</td>
          <td>{order.date}</td>
          <td>{order.dish}</td>
        </tr>
      ))}
    </tbody>
    
  </table>
  
);

export default Pedidoregistro;
