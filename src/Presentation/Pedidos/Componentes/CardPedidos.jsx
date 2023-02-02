function CardPedidos(props){
    return <div className="Vinetas">
        <div className="titulo font-monospace center">
        {props.pedi.Producto}
        </div>
        <br/>
    <div className="estiloo">
        <img src={props.pedi.Imagen} width="300" height="200"/>
    </div>
    <br/>
    <div align="center" className="padding">
    <dl className="row">
  <dt className="col-sm-3">Codigo</dt>
  <dd className="col-sm-9">{props.pedi.Codigo}</dd>

  <dt className="col-sm-3">Precio</dt>
  <dd className="col-sm-9">{props.pedi.Precio}</dd>

  <dt className="col-sm-3 text-truncate">Cant.</dt>
  <dd className="col-sm-9">{props.pedi.Cantidad}</dd>

  <dt className="col-sm-3">Estado</dt>
  <dd className="col-sm-9">{props.pedi.Estado}</dd>
  
  <dt className="col-sm-3 text-truncate">Total</dt>
  <dd className="col-sm-9">{props.pedi.Cantidad*props.pedi.Precio}</dd>
</dl>
    </div>
    </div>
    
}
export default CardPedidos