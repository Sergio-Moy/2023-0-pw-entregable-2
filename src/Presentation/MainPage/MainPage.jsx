import TopNav from '../Global/TopNav';
import Logo from '../../Style/img/Logo.png'
import { Link } from "react-router-dom"

function MainPage(){
    return <div>
        <TopNav category={0}/>
        <br />
        <img src={Logo} className="centered" style={{width: "15%"}} alt="logo" />
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/listadorestaurantes"><b>Listado de Restaurantes</b></Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/login"><b>Cuenta de Comensal</b></Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/loginpage"><b>Cuenta de Restaurante</b></Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/recomendaciones"><b>Recomendaciones</b></Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/micarrito"><b>Carrito</b></Link></h2>
        </div>
    </div>
}

export default MainPage