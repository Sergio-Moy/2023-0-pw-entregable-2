import TopNav from '../Global/TopNav';
import Cafeterias from './Cafeterias';
import FoodTrucks from './FoodTrucks';
import Platos from './Platos';
import Snacks from './Snacks';
import Tiendas from './Tiendas';

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
            <div className='col' style={{margin : "0.5%"}}>

            </div>
            <div className='col' style={{margin : "0.5%"}}>
                <h2>Tiendas</h2>
                <Tiendas myStyle={myStyle}/>                
            </div>
        </div>
    </div>
}

export default ListadoRestaurantes