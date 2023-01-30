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
//Imagen de papel
//list-style-image: URL("https://static3.depositphotos.com/1007531/256/i/600/depositphotos_2561166-stock-photo-loose-leaf-notebook-paper.jpg" );
        return <div>
    
         {
           // Recorremos las filas
           rows.map(row => {
            // Llamamos a la función que prepara la fila previo renderizado
            prepareRow(row);
            return (
                // Añadimos las propiedades a la fila
               
               <div className="col"><ul class="estiloo"
               {...row.getRowProps()}>
                 {
                   // Recorremos cada celda de la fila
                   row.cells.map((cell) => {
                     // Añadimos las propiedades a cada celda de la fila
                     return (
                       <li {...cell.getCellProps()} >
                        {
                            cell.render("Header")
                        }
                        <br/>
                         {
                           // Pintamos el contenido de la celda
                           cell.render("Cell")
                         }
                       </li>
                     );
                   })
                 }
               </ul></div>
               
             );
           })
         }
       

        </div>
}
export default ListaPedidos