import { useMemo } from "react";
export default function InfoPlatos() {

    const filas = useMemo(
      () => [
       {
           id : 1,
           Restaurante: "Cafeteria F",
           Categoria: "Bebidas",
           Producto : "Limonada Frozen (1.5L)",
           Precio: 18.5,
           Imagen:"https://www.ahorrarnuncafuetanbueno.com.pe/wp-content/uploads/2022/02/Limonada_frozen_912x700.jpg",
           Izq: "#3",
           Der: "#2"
       },
       {
        id : 2,
        Restaurante: "Cafeteria F",
        Categoria: "Bebidas",
        Producto : "Cusqueña (310 ml)",
        Precio: 4.5,
        Imagen:"https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Cusquena.png",
        Izq: "#1",
        Der: "#3"
       },
       {
        id : 3,
        Restaurante: "Cafeteria F",
        Categoria: "Bebidas",
        Producto : "Inca Cola (1.5L)",
        Precio: 6.5,
        Imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-73bW05hAU7jQDiqAgHB70rh2TGOYSW8Gvw&usqp=CAU",
        Izq: "#2",
        Der: "#1"
    },
    {
        id : 4,
        Restaurante: "Cafeteria F",
        Categoria: "Pescados y Mariscos",
        Producto : "Ceviche Familiar",
        Precio: 19.50,
        Imagen:"https://micevichedehoy.com/wp-content/uploads/2018/12/ceviche-de-pescado_700x465-700x465.jpg",
        Izq: "#6",
        Der: "#5"
    },
    {
        id : 5,
        Restaurante: "Cafeteria F",
        Categoria: "Pescados y Mariscos",
        Producto : "Sopa de cangrejo",
        Precio: 16.00,
        Imagen:"https://recetas.7maravillasgastronomicas.com/wp-content/uploads/2011/01/concentradodecangrejo.jpg",
        Izq: "#4",
        Der: "#6"
    },
    {
        id : 6,
        Restaurante: "Cafeteria F",
        Categoria: "Pescados y Mariscos",
        Producto : "Pescado con lenteja (Yuca y ensalada)",
        Precio: 22.50,
        Imagen:"https://3.bp.blogspot.com/-u-yN3kRr03o/Wy1cxQU5wWI/AAAAAAAAL7I/5VlvYZ6Iev8eGYUHZ2LvUbG7XcAZp-1zQCLcBGAs/s1600/Guiso%2Bde%2BLentejas%2Bcon%2BPescado%2BFrito.jpg",
        Izq: "#5",
        Der: "#4"
    },
    {
        id : 7,
        Restaurante: "Cafeteria F",
        Categoria: "Carnes",
        Producto : "Bisteck a lo pobre (papas, ensalada, arroz, platano y huevo)",
        Precio: 28.50,
        Imagen:"https://iperu.pe/wp-content/uploads/2019/08/bistec-a-lo-pobre_800x534.jpg",
        Izq: "#9",
        Der: "#8"
    },
    {
        id : 8,
        Restaurante: "Cafeteria F",
        Categoria: "Carnes",
        Producto : "Bisteck (papas, ensalada y arroz)",
        Precio: 27.50,
        Imagen:"https://1.bp.blogspot.com/-4THw7fRcvBs/Wl6V87BAf2I/AAAAAAAAAEk/Tqh1sOnKZPANDwOO3-zyfGO-ImgU4lBBQCLcBGAs/s1600/Bistek%2Ba%2Bla%2BParrilla.jpg",
        Izq: "#7",
        Der: "#9"
    },
    {
        id : 9,
        Restaurante: "Cafeteria F",
        Categoria: "Carnes",
        Producto : "Lomo salatado",
        Precio: 19.00,
        Imagen:"https://decomidaperuana.com/wp-content/uploads/2020/10/lomo-saltado.jpg",
        Izq: "#8",
        Der: "#7"
    },
        
      ],
      []
    );
    const listaPlatosJSON = JSON.stringify(filas)
          console.log(filas)
          console.log(listaPlatosJSON)   
       sessionStorage.setItem("PLATOS", listaPlatosJSON)
   
    return filas;
   }