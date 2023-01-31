import TopNav from '../Global/TopNav';
import useFilas from "./Componentes/InfoPlatos";

function Platos(){
    const listarow = []//Lista de filas
    let listacol = []//Lista de columnas
    let listaCategoria =["Bebidas","Pescados y Mariscos","Carnes"]//Nombre de Categorias
    const data = useFilas();
    
    listaCategoria.forEach(function(lista,index){
        data.forEach(function(platos){
            if(platos.Categoria === lista[index]){//Mi idea es poner una lista de Bebidas, Pescasdos y Canes
                listacol.push(
    <div>
                    <div className="itemCarrusel" id={platos.id}>
                    <div className="tarjetaCarrusel">
                        <h2 className="clase_1"> {platos.Categoria} </h2>
                        <p className="clase_2">{platos.Producto}</p>
                        <p className="clase_3">{platos.Precio}</p>
                        <div className="alinear_der">
                        <img src={platos.Imagen} width="200" height="150"/>
                        <div className="flechasCarrusel">
                    <a href={platos.Izq}>
                        <span className="material-symbols-outlined">
                            first_page
                            </span>
                    </a>
                    <a href={platos.Der}>
                        <span className="material-symbols-outlined">
                            last_page
                            </span>
                    </a>
                </div>
                    </div>
                    </div>
                </div>
                
    </div>
                )
                
            }
        })
        console.log(lista[index])    
        listarow.push(
            <div className="contenedorItemsCarrusel">
                {listacol}
            </div>
            
            )
    })
    

    return <div>
        <TopNav category={3}/>
        <br/>
        <h1>Registrar una nueva categoria</h1>
        <br/>
        <div class="clase_0">
    <a  href="/NuevaCategoria">Agregar Categoria</a>
    </div>
    <br/>
    <h1>Platos a la Carta</h1>
    <br/>
    <div>
    {listarow}
    </div>
    
    
    </div>
}
export default Platos