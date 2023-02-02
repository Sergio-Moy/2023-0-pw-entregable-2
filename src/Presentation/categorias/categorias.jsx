import React, { useState } from "react";


const Category = ({ category, onSelect }) => (
  <button onClick={() => onSelect(category.id)}>{category.name}</button>
);

const Dish = ({ dish }) => <p>{dish.name}</p>;

const Restaurant = ({ restaurant }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  return (
    <div>
      <h3>{restaurant.name}</h3>
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
          <h4>Platos de la categoría seleccionada:</h4>
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
      name: "Pizzería",
      categories: [
        { id: 1, name: "Pizzas" },
        { id: 2, name: "Entrantes" },
        { id: 3, name: "Bebidas" }
      ],
      dishes: [
        { id: 1, name: "Pizza Margherita", categoryId: 1 },
        { id: 2, name: "Pizza Pepperoni", categoryId: 1 },
        { id: 3, name: "Aceitunas", categoryId: 2 },
        { id: 4, name: "Alitas de pollo", categoryId: 2 },
        { id: 5, name: "Refresco", categoryId: 3 },
        { id: 6, name: "Cerveza", categoryId: 3 }
      ]
    },
    {
      id: 2,
      name: "Juguería",
      categories: [
        { id: 4, name: "Jugos naturales" },
        { id: 5, name: "Smoothies" }
      ],
      dishes: [
        { id: 7, name: "Jugo de naranja", categoryId: 4 },
        { id: 8, name: "Jugo de manzana", categoryId: 4 },
        { id: 9, name: "Smoothie de frutilla", categoryId: 5 },
        { id: 10, name: "Smoothie de banana", categoryId: 5 }
      ]
    }
  ];

  return (

    <div className="centrar">
        <div className="centrar">

      {restaurants.map(restaurant => (
<Restaurant key={restaurant.id} restaurant={restaurant} />
))}
</div>
    </div>
);
};

export default Categoria;