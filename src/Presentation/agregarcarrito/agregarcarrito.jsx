import React, { useState } from "react";

const RestaurantCard = ({ restaurant, onAddOrder }) => {
  const addToCart = dish => {
    onAddOrder({ dish, restaurant });
  };

  return (
    <div>
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
    </div>
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
      name: "Pizzería",
      dishes: [
        { id: 1, name: "Margherita" },
        { id: 2, name: "Pepperoni" },
        { id: 3, name: "Vegetariana" }
      ]
    },
    {
      id: 2,
      name: "Juguería",
      dishes: [
        { id: 4, name: "Jugo de naranja" },
        { id: 5, name: "Jugo de manzana" },
        { id: 6, name: "Jugo de frutas del bosque" }
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

  return (
    <div>
        <div>
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} onAddOrder={addOrder} />
      ))}
      <OrderTable orders={orders} onClearOrders={clearOrders} />
    </div>
    </div>
    
  );
};

export default App;
