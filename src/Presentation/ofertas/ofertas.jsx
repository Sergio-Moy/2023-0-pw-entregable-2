import React from "react";

const RestaurantCard = ({ restaurant }) => (
  <div>
    <h3>{restaurant.name}</h3>
    {restaurant.offers.length > 0 ? (
      <ul>
        <h4>Ofertas:</h4>
        {restaurant.offers.map(offer => (
          <li key={offer.id}>{offer.description}</li>
        ))}
      </ul>
    ) : (
      <p>Este restaurante no tiene ofertas actualmente.</p>
    )}
  </div>
);

const Ofertas = () => {
  const restaurants = [
    {
      id: 1,
      name: "Pizzería",
      offers: [
        { id: 1, description: "20% de descuento en los martes" },
        { id: 2, description: "Combo familia a $30" }
      ]
    },
    {
      id: 2,
      name: "Juguería",
      offers: []
    },
    {
      id: 3,
      name: "Sushi Bar",
      offers: [
        { id: 3, description: "Rolls a mitad de precio los jueves" },
        { id: 4, description: "Oferta de bienvenida: 10% de descuento en su primer pedido" }
      ]
    }
  ];

return (

    <div className="centrar">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>

    );
};

export default Ofertas;