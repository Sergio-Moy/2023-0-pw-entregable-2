function Elemento(props){
    if(props.current === true){
        return <a href={props.enlace} className="current col">{props.texto}</a>
    }
    else{
        return <a href={props.enlace} className="col">{props.texto}</a>
    }
}

function TopNav(props){
    const enlaces = ["/", "/listadorestaurantes", "/logincliente", "/login", "/recomendaciones", "/micarrito"]
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