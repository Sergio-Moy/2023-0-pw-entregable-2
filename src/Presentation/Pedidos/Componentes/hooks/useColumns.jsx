import { useMemo } from "react";

export default function useColumns() {
 const columns = useMemo(
   () => [
     {
       Header: "Codigo de Pedido",
       accessor: "Codigo"
     },
     {
       Header: "Producto",
       accessor: "Producto"
     },
     {
       Header: "precio",
       accessor: "Precio"
     },
     {
       Header: "Cantidad",
       accessor: "Cantidad"
     },
     {
        Header: "Estado",
        accessor: "Estado"
      }
   ],
   []
 );

 return columns;
}