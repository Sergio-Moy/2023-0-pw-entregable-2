import TopNav from '../Global/TopNav';
import useFilas from "./Componentes/InfoPlatos";
function NuevaCategoria(){
    const listarow = []//Lista de filas
    let listacol = []//Lista de columnas
    let listaCategoria =["Bebidas","Pescados y Mariscos","Carnes"]//Nombre de Categorias
    const data = useFilas();
    
for(let i = 0; i < listaCategoria.length; i++){
    console.log(listaCategoria[i])
    listacol = []//Para reiniciar la lista
        data.forEach(function(platos){
            if(platos.Categoria === listaCategoria[i]){//Mi idea es poner una lista de Bebidas, Pescasdos y Canes
                listacol.push(
    <div>
        <br/>
                    <div className="itemCarrusel" id={platos.id}>
                    <div className="tarjetaCarrusel">
                        <h2 className="clase_1"> {platos.Categoria} </h2>
                        <div className="cuadro">
                        <p className="clase_2">{platos.Producto}</p>
                        <p className="clase_3">{platos.Precio}</p>
                        <div className="alinear_der">
                        <img src={platos.Imagen} width="200" height="150"/>
                        <div className="flechasCarrusel">
                    <a href={platos.Izq}>
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
                    </a>
                    <a href={platos.Der}>
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
                    </a>
                    </div>
    
  
                </div>
                    </div>
                    </div>
                </div>
                
    </div>
                )
                
            }
        })  
        listarow.push(
            <div className="contenedorItemsCarrusel">
                {listacol}
            </div>
            
            )
        
    
}
    return <div>
        <TopNav category={3}/>
        <br/><br/>
        <h1>Agregar Categoria</h1>
    <form>
        <div className="centrar">
        <input type="text" />
        <input type="submit" value="OK"/>
        </div>
    </form>
    <br/>
    <h2 className="clase_1"> Desayuno </h2>
    <br/>
    <h1>Registrar un nuevo plato</h1>
    <br/>
    <div className="clase_0">
    <a href="/NuevoPlato">Agregar Plato</a>
    </div>
    <br/>
    <h1>Platos a la Carta</h1>
    <br/>
    <div>
    {listarow}
    </div>
    </div>
}
export default NuevaCategoria