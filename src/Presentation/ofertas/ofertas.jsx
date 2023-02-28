import React, { useEffect, useState } from "react";
import burger from "../../Style/img/burger.png";
import lomo from "../../Style/img/lomo.png";
import chifa from "../../Style/img/chifa.png";
import TopNav from "../Global/TopNav";
import { Link } from "react-router-dom";

const RestaurantCard = ({ data }) => (
  <div className="card2">
    <br></br>
    <img src={data.imagen} alt={data.nombre} />
    <h3>{data.nombre}</h3>
    <p>{data.descripción}</p>
    <p>Precio: {data.precio} soles.</p>
    <button type="button">
      ¡Lo quiero!
    </button>
  </div>
);
const Ofertas = () => {
  const [ofertasDatos, setOfertasDatos] = useState({});

  useEffect(() => {
    const getData = async () => {
      const rawResponse = await fetch("https://restaurantes20194359.azurewebsites.net/backend/ofertas");
      await rawResponse.json().then((data) => {
        setOfertasDatos(data);
        console.log(data);
      });
    };

    getData();
  }, []);

  const restaurants = [
    {
      id: 1,
      name: "BEMBOS",
      img: burger,
      offers: [
        { id: 1, description: "20% de descuento en los martes" },
        { id: 2, description: "Combo familia a $30" },
      ],
    },
    {
      id: 2,
      name: "CAFETERIA O",
      img: lomo,
      offers: [],
    },
    {
      id: 3,
      name: "SUSHI BAR",
      img: chifa,
      offers: [
        { id: 3, description: "Rolls a mitad de precio los jueves" },
        {
          id: 4,
          description:
            "Oferta de bienvenida: 10% de descuento en su primer pedido",
        },
      ],
    },
  ];

  return (
    <div>
      <TopNav category />
      <div className="catalogo">
        {ofertasDatos.ofertas == null ? (
          <div>No hay ofertas.</div>
        ) : (
          ofertasDatos.ofertas.map((oferta) => {
            return <RestaurantCard data={oferta} />;
            return <div>{oferta.nombre}</div>;
          })
        )}
        {/* {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))} */}
      </div>
      <div className="centrar">
      <Link to="/2023-0-pw-entregable-2/pedidoregistro" style={{margin : "1%"}}>Registrar un pedido</Link>
      <br/><br/>
      <Link to="/2023-0-pw-entregable-2/buscar" style={{margin : "1%"}}>Buscar un pedido</Link>
      <br/>
      </div>
      <br/>
    </div>
  );
};

export default Ofertas;