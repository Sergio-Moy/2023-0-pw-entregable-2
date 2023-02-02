import TopNav from '../Global/TopNav';
import Cafeterias from './Cafeterias';
import FoodTrucks from './FoodTrucks';
import Platos from './Platos';
import Snacks from './Snacks';
import Tiendas from './Tiendas';
import {Link} from 'react-router-dom'

function ListadoRestaurantes(){
    const myStyle = {
        width: "10%",
        float: "right"
    }
    return <div>
        <TopNav category = {1}/>
        <br />
        <h1>Listado de Restaurantes</h1>
        <div className='row'>
            <div className='col' style={{margin : "0.5%"}}>
                <h2>Cafeterías</h2>
                <Cafeterias myStyle={myStyle}/>
            </div>
            <div className='col' style={{margin : "0.5%"}}>
                <h2>Food Trucks</h2>
                <FoodTrucks myStyle={myStyle}/>
            </div>
            <div className='col' style={{margin : "0.5%"}}>
                <h2>Platos</h2>
                <Platos myStyle={myStyle}/>
            </div>
        </div>
        <div className='row'>
            <div className='col' style={{margin : "0.5%"}}>
                <h2>Snacks</h2>
                <Snacks myStyle={myStyle}/>
            </div>
            <div className='col centrar' style={{margin : "0.5%"}}>
            <h2>Acciones de comensal</h2>
            <Link to="/2023-0-pw-entregable-2/agregarcarrito" style={{margin : "1%"}}>Agregar un plato al carrito</Link>
            <br />
            <Link to="/2023-0-pw-entregable-2/categorias" style={{margin : "1%"}}>Ver categorías de platos</Link>
            <br />
            <Link to="/2023-0-pw-entregable-2/ofertas" style={{margin : "1%"}}>Ver Ofertas</Link>
            </div>
            <div className='col' style={{margin : "0.5%"}}>
                <h2>Tiendas</h2>
                <Tiendas myStyle={myStyle}/>                
            </div>
        </div>
    </div>
}

export default ListadoRestaurantes