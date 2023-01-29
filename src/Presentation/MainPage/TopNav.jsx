function TopNav(){
    return <div className="topnav">
        <div className="row">
       <a href="/" className="current col">Inicio</a>
       <a href="/listadorestaurantes" className="col">Listado de Restaurantes</a>
       <a href="/logincliente" className="col">Cuenta de Comensal</a>
       <a href="/login" className="col">Cuenta de Restaurante</a>
       <a href="/recomendaciones" className="col">Recomendaciones</a>
       <a href="/micarrito" className="col">Carrito</a>
        </div>
    </div>
}

export default TopNav