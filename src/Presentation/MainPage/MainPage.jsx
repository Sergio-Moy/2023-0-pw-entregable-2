import TopNav from '../Global/TopNav';
import Logo from '../../Style/img/Logo.png'
import { Link } from "react-router-dom"

function MainPage(){
    return <div>
        <TopNav category={0}/>
        <img src={Logo} className="centered" style={{width: "15%"}} alt="logo" />
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/listadorestaurantes">Listado de Restaurantes</Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/logincomensal">Cuenta de Comensal</Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/loginpage">Cuenta de Restaurante</Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/recomendaciones">Recomendaciones</Link></h2>
        </div>
        <div>
            <h2 className="centrar"><Link to="/2023-0-pw-entregable-2/micarrito">Carrito</Link></h2>
        </div>
    </div>
}

export default MainPage