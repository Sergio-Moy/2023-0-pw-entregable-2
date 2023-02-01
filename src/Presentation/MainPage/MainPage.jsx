import TopNav from '../Global/TopNav';
import Logo from '../../Style/img/Logo.png'

function MainPage(){
    return <div>
        <TopNav category={0}/>
        <img src={Logo} className="centered" style={{width: "15%"}} alt="logo" />
        <div>
            <h2 className="centrar"><a href="/listadorestaurantes">Listado de Restaurantes</a></h2>
        </div>
        <div>
            <h2 className="centrar"><a href="/logincliente">Cuenta de Comensal</a></h2>
        </div>
        <div>
            <h2 className="centrar"><a href="/login">Cuenta de Restaurante</a></h2>
        </div>
        <div>
            <h2 className="centrar"><a href="/recomendaciones">Recomendaciones</a></h2>
        </div>
        <div>
            <h2 className="centrar"><a href="/micarrito">Carrito</a></h2>
        </div>
    </div>
}

export default MainPage