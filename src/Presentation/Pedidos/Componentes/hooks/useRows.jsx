import { useMemo } from "react";

export default function useRows() {
 const rows = useMemo(
   () => [
    {
        id : 1,
        Codigo : 20201166,
        Producto : "Ceviche",
        Precio: 18.5,
        Cantidad: 1,
        Estado: "Enviando al Cliente"
    },
    {
        id : 2,
        Codigo : 20201167,
        Producto : "Bisteck",
        Precio: 21.5,
        Cantidad: 1,
        Estado: "Enviando al Cliente"
    },
    {
        id : 3,
        Codigo : 20201167,
        Producto : "Inca Cola (1.5L)",
        Precio: 6.5,
        Cantidad: 2,
        Estado: "Enviando al Cliente"
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
