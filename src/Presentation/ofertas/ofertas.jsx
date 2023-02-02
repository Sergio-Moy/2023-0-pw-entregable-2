import React from "react";
import burger from '../../Style/img/burger.png';
import lomo from '../../Style/img/lomo.png';
import chifa from '../../Style/img/chifa.png';
import TopNav from '../Global/TopNav';

const RestaurantCard = ({ restaurant }) => (
  <div className="card">
    <br></br>
    <img src={restaurant.img} alt={restaurant.name} />
    <h3>{restaurant.name}</h3>
    {restaurant.offers.length > 0 ? (
      <ul>
        {restaurant.offers.map(offer => (
          <li key={offer.id}>{offer.description}</li>
        ))}
      </ul>
    ) : (
  
      <p>Platos a la carta: 
        <p>- Lomos saltado
           A solo s/. 15 soles</p>
      </p>
    )}
        <button type='button' className='btn btn-outline-light'>¡Lo quiero!</button>

  </div>
  
);
const Ofertas = () => {
  const restaurants = [
    {
      id: 1,
      name: "BEMBOS",
      img: burger,
      offers: [
        { id: 1, description: "20% de descuento en los martes" },
        { id: 2, description: "Combo familia a $30" }
      ]
    },
    {
      id: 2,
      name: "CAFETERIA O",
      img: lomo,
      offers: []
    },
    {
      id: 3,
      name: "SUSHI BAR",
      img: chifa,
      offers: [
        { id: 3, description: "Rolls a mitad de precio los jueves" },
        { id: 4, description: "Oferta de bienvenida: 10% de descuento en su primer pedido" }
      ]
    }
  ];

  return <div>
     <TopNav category/>
    <div className="catalogo">
      {restaurants.map(restaurant => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  </div>
};

export default Ofertas;
