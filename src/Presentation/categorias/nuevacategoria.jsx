import React, { useState } from "react";
import TopNav from '../Global/TopNav';


const Category = ({ category, onSelect }) => (
  <button onClick={() => onSelect(category.id)}>{category.name}</button>
);

const Dish = ({ dish }) => <p>{dish.name}</p>;

const Restaurant = ({ restaurant }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <div>
      <h1>{restaurant.name}</h1>
      <div>
        {restaurant.categories.map(category => (
          <Category
            key={category.id}
            category={category}
            onSelect={id => setSelectedCategoryId(id)}
          />
        ))}
      </div>
      <hr />
      {selectedCategoryId ? (
        <div>
          <h5>Platos de la categoría seleccionada:</h5>
          {restaurant.dishes
            .filter(dish => dish.categoryId === selectedCategoryId)
            .map(dish => (
              <Dish key={dish.id} dish={dish} />
            ))}
        </div>
      ) : (
        <p>Selecciona una categoría para ver sus platos.</p>
      )}
    </div>
  );
};

const Categoria = () => {
  const restaurants = [
    {
      id: 1,
      name: "Listo",
      categories: [
        { id: 1, name: "Desayuno" },
        { id: 2, name: "Almuerzo" },
        { id: 3, name: "Cena" }
      ],
      dishes: [
        { id: 1, name: "Combo 1: 1 Café + 1 Triple", categoryId: 1 },
        { id: 2, name: "Combo 2: Un jugo + 2 Galletas", categoryId: 1 },
        { id: 3, name: "2 Triples + 2 Gaseosas", categoryId: 2 },
        { id: 4, name: "Hamburguesa Clasica", categoryId: 2 },
        { id: 5, name: "Pizza pepperoni grande + 1L de gaseosa", categoryId: 3 },
        { id: 6, name: "Pizza Americana personal + 1 gaseosa", categoryId: 3 }
      ]
    },
    {
      id: 2,
      name: "BEMBOS",
      categories: [
        { id: 4, name: "Hamburguesas" },
        { id: 5, name: "Complementos" },
      ],
      dishes: [
        { id: 7, name: "Hamburguesa de Pollo", categoryId: 4 },
        { id: 8, name: "Hamburguesa de Carne", categoryId: 4 },
        { id: 9, name: "Porción de papitas", categoryId: 5 },
        { id: 10, name: "Extra de queso", categoryId: 5 }
      ]
    }
  ];

  return <div>
  <TopNav category/>
    <div className="centrar">
        <div className="centrar">

      {restaurants.map(restaurant => (
<Restaurant key={restaurant.id} restaurant={restaurant} />
))}
</div>
    </div>
    </div>
};

export default Categoria;