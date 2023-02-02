import React, { useState } from "react";
import TopNav from '../Global/TopNav';


const RestaurantCard = ({ restaurant, onAddOrder }) => {
  const addToCart = dish => {
    onAddOrder({ dish, restaurant });
  };

  return (
    <div className="centrar"><div>
    <h3>{restaurant.name}</h3>
    <ul>
      {restaurant.dishes.map(dish => (
        <li key={dish.id}>
          {dish.name}
          <button onClick={() => addToCart(dish)}>
            Agregar al carrito
          </button>
        </li>
      ))}
    </ul>
  </div></div>
    
  );
};

const OrderTable = ({ orders, onClearOrders }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Restaurante</th>
          <th>Plato</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.dish.id}>
            <td>{order.restaurant.name}</td>
            <td>{order.dish.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <button onClick={onClearOrders}>Limpiar carrito</button>
  </div>
);

const App = () => {
  const [restaurants, setRestaurants] = useState([
    {
      id: 1,
      name: "Bembos",
      dishes: [
        { id: 1, name: "Hambuguesa de carne" },
        { id: 2, name: "helado" },
        { id: 3, name: "Complementos" }
      ]
    },
    {
      id: 2,
      name: "Listo",
      dishes: [
        { id: 4, name: "Combo 1 : café, pan con queso" },
        { id: 5, name: "Jugo de manzana" },
        { id: 6, name: "Jugo de frutas del bosque" }
      ]
    },
    {
      id: 3,
      name: "Chifa Express",
      dishes: [
        { id: 4, name: "Combo 1: Porción de chaufa personal " },
        { id: 5, name: "Combo de Alistas Express" },
        { id: 6, name: "Combo Combinado" }
      ]
    }

  ]);

  const [orders, setOrders] = useState([]);

  const addOrder = order => {
    setOrders([...orders, order]);
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return <div>
    <TopNav category/>
        <div>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} onAddOrder={addOrder} />
      ))}
      <OrderTable orders={orders} onClearOrders={clearOrders} />
    </div>
    </div>
};


export default App;
