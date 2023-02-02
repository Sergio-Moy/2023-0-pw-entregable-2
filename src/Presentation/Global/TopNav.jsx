import { Link } from "react-router-dom"

function Elemento(props){
    if(props.current === true){
        /*return <a href={props.enlace} className="current col">{props.texto}</a>*/
        return <Link to={props.enlace} className="current col">{props.texto}</Link>
    }
    else{
        /*return <a href={props.enlace} className="col">{props.texto}</a>*/
        return <Link to={props.enlace}  className="col">{props.texto}</Link>
    }
}

function TopNav(props){
    const enlaces = ["/2023-0-pw-entregable-2/", "/2023-0-pw-entregable-2/listadorestaurantes", "/2023-0-pw-entregable-2/login", "/2023-0-pw-entregable-2/loginpage", "/2023-0-pw-entregable-2/recomendaciones", "/2023-0-pw-entregable-2/micarrito"]
    const textos = ["Inicio", "Listado de Restaurantes", "Cuenta de Comensal", "Cuenta de Restaurante", "Recomendaciones", "Carrito"]
    const barra = []

    for (let i = 0; i < 6; i++){
        if(i === props.category){
            barra.push(<Elemento current = {true} enlace={enlaces[i]} texto={textos[i]}/>)
        }
        else{
            barra.push(<Elemento current = {false} enlace={enlaces[i]} texto={textos[i]}/>)
        }
    }

    return <div className="topnav">
        <div className="row">
            {barra}
        </div>
    </div>
}

export default TopNav