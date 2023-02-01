import { useTable } from "react-table";
import useRows from "./hooks/useRows";
import useColumns from "./hooks/useColumns";

function ListaPedidos(){
    /*
    Fuente:
    https://www.paradigmadigital.com/dev/agilizar-desarrollo-tablas-react/
    */
    const columns = useColumns();
    const data = useRows();
    const table = useTable({ columns, data });
    console.log("AAAA")
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
      } = table;
    console.log("BBBB")


        return <div>
    {/* Añadimos las propiedades a nuestra tabla nativa */}
    <table {...getTableProps()}>
       <thead class="cabecera">
         {
           // Recorremos las columnas que previamente definimos
           headerGroups.map(headerGroup => (
             // Añadimos las propiedades al conjunto de columnas
             <tr {...headerGroup.getHeaderGroupProps()}>
               {
                 // Recorremos cada columna del conjunto para acceder a su información
                 headerGroup.headers.map((column) => (
                   // Añadimos las propiedades a cada celda de la cabecera
                   <th class="columna" {...column.getHeaderProps()}>
                     {
                       // Pintamos el título de nuestra columna (propiedad "Header")
                       column.render("Header")
                     }
                   </th>
                 ))
               }
             </tr>
           ))
         }
       </thead>
    {/* Añadimos las propiedades al cuerpo de la tabla */}
    <tbody {...getTableBodyProps()}>
         {
           // Recorremos las filas
           rows.map(row => {
             // Llamamos a la función que prepara la fila previo renderizado
             prepareRow(row);
             return (
               // Añadimos las propiedades a la fila
               <tr {...row.getRowProps()}>
                 {
                   // Recorremos cada celda de la fila
                   row.cells.map((cell) => {
                     // Añadimos las propiedades a cada celda de la fila
                     return (
                       <td {...cell.getCellProps()}>
                         {
                           // Pintamos el contenido de la celda
                           cell.render("Cell")
                         }
                       </td>
                     );
                   })
                 }
               </tr>
             );
           })
         }
       </tbody>
     </table>

        </div>
    
    

}
export default ListaPedidos