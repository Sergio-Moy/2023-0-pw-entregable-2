import React, { useEffect, useState } from "react";
import TopNav from "../Global/TopNav";

const Category = ({ category, onSelect }) => (
  <button onClick={() => onSelect(category.id)}>{category.name}</button>
);

const Dish = ({ data }) => (
  <div
    className="card col-lg-4"
    style={{
      width: "18rem",
      margin: "0 1rem",
      minHeight: "20rem",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "5px 5px 10px rgb(135, 135, 135)",
    }}

  >
    <img
      className="card-img-top"
      src={data.imagen}
      style={{ borderRadius: "10px" }}
    />
    <div className="card-body text-center">
      <h6>{data.producto}</h6>
      <h5>S/{data.precio}</h5>
      <button
        style={{
          backgroundColor: "rgb(200, 200, 200)",
          borderRadius: "5px",
          fontSize: "14px",
          padding: "5px 16px",
          marginTop: "0.5rem",
        }}
      >
        Añadir al carrito
      </button>
    </div>
  </div>
);

const Categoria = () => {
  const [platos, setPlatos] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [categories, setCategories] = useState([]);

  const getCategories = async (restauranteId) => {
    const rawResponse = await fetch(
      "https://restaurantes20194359.azurewebsites.net/backend/platosprueba?id=" + restauranteId
    );
    await rawResponse.json().then((data) => {
      setCategories(data.categorias);
    });
    
  };

  const getData = async (categoriaId, restauranteId) => {
    const rawResponse = await fetch(
      "https://restaurantes20194359.azurewebsites.net/backend/platos_1000/listar?categoria=" +
        categoriaId +
        "&restaurante=" +
        restauranteId
    );
    await rawResponse.json().then((data) => {
      setPlatos(data.platos_10);
      console.log("CAMBIOSS",data.platos_10)
    });
  };

  const getRestaurantes = async () => {
    const rawResponse = await fetch(
      "https://restaurantes20194359.azurewebsites.net/backend/obtener_restaurantes"
    );
    await rawResponse.json().then((data) => {
      setRestaurantes(data.restaurantes);
    });
  };

  const [id_restaurante, setIdRestaurante] = useState(1);
  var id_categoria = -1;

  useEffect(() => {
    getData(-1, 1);
    getCategories(1);
    getRestaurantes();
  }, []);

  return (
    <div>
      <TopNav category />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "4rem", fontWeight: "200" }}>CATEGORIAS</p>
        <div style={{marginBottom: "2rem"}}>
          <span>Restaurante: </span>
          <select
            className="custom-select"
            onChange={(event) => {
              setIdRestaurante(event.target.value);
              id_categoria = -1;
              getData(-1, event.target.value);
              getCategories(event.target.value);
            }}
          >
            {restaurantes == [] ? (
              <div>No hay platos</div>
            ) : (
              restaurantes.map((restaurante) => {
                return (
                  <option value={restaurante.id}>{restaurante.nombre}</option>
                );
              })
              )}
          </select>
          <span style={{padding: "0px 20px"}}/>
          <span>Categoria: </span>
          <select
            className="custom-select"
            onChange={(event) => {
              getData(event.target.value, id_restaurante);
            }}
          >
            <option selected value="-1">
              Todos
            </option>
            {categories == [] ? (
              <div>No hay platos</div>
            ) : (
              categories.map((categories) => {
                return (
                  <option value={categories.id}>{categories.nombre}</option>
                );
              })
            )}
          </select>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-md-center">
          {platos == [] ? (
            <div>No hay platos</div>
          ) : (
            platos.map((plato) => <Dish key={plato.id} data={plato} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default Categoria;