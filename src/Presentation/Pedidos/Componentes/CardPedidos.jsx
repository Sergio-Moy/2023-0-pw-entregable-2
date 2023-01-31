function CardPedidos(props){
    return <div left= "20px">
    <div>
        <img src={props.pedi.Imagen} width="300" height="200"/>
    </div>
    <div align="center">
        <br/>
    <dl class="row">
  <dt class="col-sm-3">Codigo</dt>
  <dd class="col-sm-9">{props.pedi.Codigo}</dd>

  <dt class="col-sm-3">Producto</dt>
  <dd class="col-sm-9">{props.pedi.Producto}</dd>

  <dt class="col-sm-3">Precio</dt>
  <dd class="col-sm-9">{props.pedi.Precio}</dd>

  <dt class="col-sm-3 text-truncate">Cantidad</dt>
  <dd class="col-sm-9">{props.pedi.Cantidad}</dd>

  <dt class="col-sm-3">Estado</dt>
  <dd class="col-sm-9">{props.pedi.Estado}</dd>
  
  <dt class="col-sm-3 text-truncate">Total</dt>
  <dd class="col-sm-9">{props.pedi.Cantidad*props.pedi.Precio}</dd>
</dl>
    </div>
    </div>
    
}
export default CardPedidos