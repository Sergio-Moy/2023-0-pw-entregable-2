import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
    {
        id : 1,
        Restaurante: "Cafeteria F",
        Codigo : 20201166,
        Producto : "Ceviche",
        Precio: 18.5,
        Cantidad: 1,
        Estado: "Enviando al Cliente",
        Imagen: "https://micevichedehoy.com/wp-content/uploads/2018/12/ceviche-de-pescado_700x465-700x465.jpg"
    },
    {
        id : 2,
        Restaurante: "Cafeteria F",
        Codigo : 20201167,
        Producto : "Bisteck",
        Precio: 21.5,
        Cantidad: 1,
        Estado: "Enviando al Cliente",
        Imagen: "https://1.bp.blogspot.com/-4THw7fRcvBs/Wl6V87BAf2I/AAAAAAAAAEk/Tqh1sOnKZPANDwOO3-zyfGO-ImgU4lBBQCLcBGAs/s1600/Bistek%2Ba%2Bla%2BParrilla.jpg"
    },
    {
        id : 3,
        Restaurante: "Cafeteria F",
        Codigo : 20201167,
        Producto : "Inca Cola (1.5L)",
        Precio: 6.5,
        Cantidad: 2,
        Estado: "Enviando al Cliente",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-73bW05hAU7jQDiqAgHB70rh2TGOYSW8Gvw&usqp=CAU"
    },
    {
        id : 4,
        Restaurante: "Cafeteria F",
        Codigo : 20201168,
        Producto : "Cusqueña",
        Precio: 4.5,
        Cantidad: 2,
        Estado: "Enviando al Cliente",
        Imagen: "https://polleriaslagranja.com/wp-content/uploads/2022/10/La-Granja-Real-Food-Chicken-Cusquena.png"
    }
     
   ],
   []
 );
 const listaPedidosJSON = JSON.stringify(rows)
       console.log(rows)
       console.log(listaPedidosJSON)   
    sessionStorage.setItem("PEDIDO", listaPedidosJSON)

 return rows;
}
