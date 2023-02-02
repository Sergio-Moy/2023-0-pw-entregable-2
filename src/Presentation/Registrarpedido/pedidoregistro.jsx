import React, { useState } from "react";
import TopNav from '../Global/TopNav';
const Pedidoregistro = () => {
  const [order, setOrder] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      localStorage.setItem("order", JSON.stringify(order));
      console.log("Pedido guardado en memoria local");
    } catch (error) {
      console.error("Error al guardar pedido en memoria local: ", error);
    }
  };

  return (
  <div>
    <TopNav category ={3}/>
    <div className="centrar">
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={order.name}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="address">Dirección:</label>
      <input
        type="text"
        id="address"
        name="address"
        value={order.address}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <label htmlFor="phone">Número de teléfono:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={order.phone}
        onChange={handleInputChange}
      />
    </div>
    <button type="submit">Realizar pedido</button>
  </form>
</div></div>
    
  );
};

export default Pedidoregistro;
