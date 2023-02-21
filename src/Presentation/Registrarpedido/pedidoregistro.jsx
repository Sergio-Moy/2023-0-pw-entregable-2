import React, { useEffect, useState } from 'react';

import TopNav from '../Global/TopNav';
function Pedidoregistro () {
  
  const [pedido, setPedido] = useState("");
  const [error, setError] = useState("");
  const [ListaCategoria, setListaCategoria] = useState([]);
  const [ListaRestaurante, setListaRestaurante] = useState([]);
  const [ListaCliente, setListaCliente] = useState([]);


  //BLOQUE 2
  const [Producto, setProducto] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const [Precio, setPrecio] = useState('');
    const [Categoria_id, setCategoria_id] = useState('');
    const [Restaurante_id, setRestaurante_id] = useState('');
    const [Cliente_id, setCliente_id] = useState('');
    const [Codigo_verificación, setCodigo_verificación] = useState('');
    const [Estado, setEstado] = useState('');
    const [Registrado, setRegistrado] = useState('');

    const obtenerClienteAsyncAwait = async function() {
      try {
            const response = await fetch(`http://localhost:8000/backend/ObtenerSoloCliente_7/listar?codigo=-1`)
            const data = await response.json()//Se obtiene la data en forma de objeto
        if(data.error === ""){
          setListaCliente(data.Pedidos)//Variable de estado
        }else{
            setError(data.error)
        }
        
       }catch(error) {
             setError("Error obteniendo categorias")
       }
    }
    useEffect(function() {
      obtenerClienteAsyncAwait()
    }, [])
    console.log("LISTA CLIENTE",ListaCliente)

    const obtenerRestauranteAsyncAwait = async function() {
      try {
            const response = await fetch(`http://localhost:8000/backend/ObtenerSoloRestaurante_7/listar?codigo=-1`)
            const data = await response.json()//Se obtiene la data en forma de objeto
        if(data.error === ""){
          setListaRestaurante(data.Pedidos)//Variable de estado
        }else{
            setError(data.error)
        }
        
       }catch(error) {
             setError("Error obteniendo categorias")
       }
    }
    useEffect(function() {
      obtenerRestauranteAsyncAwait()
    }, [])
    console.log("LISTA RESTAURANTE",ListaRestaurante)

    const obtenerCategoriasAsyncAwait = async function() {
      try {
            const response = await fetch(`http://localhost:8000/backend/categorias_10/listar?restaurante=-1`)
            const data = await response.json()//Se obtiene la data en forma de objeto
        if(data.error === ""){
          setListaCategoria(data.pedidos)//Variable de estado
        }else{
            setError(data.error)
        }
        
       }catch(error) {
             setError("Error obteniendo categorias")
       }
    }
    useEffect(function() {
       obtenerCategoriasAsyncAwait()
    }, [])
    console.log("LISTA CATEGORIA",ListaCategoria)

    const handleSubmit = async function(event){
      const body = {
        Producto : Producto,
        Cantidad : Cantidad,
        Precio : Precio,
        Categoria_id : Categoria_id,
        Restaurante_id : Restaurante_id,
        Cliente_id : Cliente_id,
        Codigo_verificación : Codigo_verificación,
        Estado : Estado,
        Registrado : Registrado
      }
      const response = await fetch('http://localhost:8000/backend/ObtenerPedido_Registrar_7/listar', {method : "POST",
      body : JSON.stringify(body)})

      const data = await response.json()
      console.log(data);
      if (data.error ==="") {
        setError(data.error)
        setPedido(data.pedidos)
      }
      else{
        setError(data.error)
      }
    }

    
  const respuesta_parte1 = function(){
    handleSubmit()
    
  }
  

  const FormRegistrar = function(){
  
    return <form>
      
      <br/>
      <div className='centrar'>
      <label>Producto:&#160;&#160;</label>
      <input type="text" id="code" value={Producto} onChange={(event) => setProducto(event.target.value)}/>
      <br/>
      <label>Cantidad:&#160;&#160;</label>
      <input type="text" id="code" value={Cantidad} onChange={(event) => setCantidad(event.target.value)}/>
      <br/>
      <label>Precio:&#160;&#160;</label>
      <input type="text" id="code" value={Precio} onChange={(event) => setPrecio(event.target.value)}/>
      <br/>
      <label>Codigo Verificacion:&#160;&#160;</label>
      <input type="text" id="code" value={Codigo_verificación} onChange={(event) => setCodigo_verificación(event.target.value)}/>
      <br/>
      <label>Categoria:&#160;&#160;</label>
      <select className="form-select"
        id = "Categoria"
        value={Categoria_id}
        onChange={(event) => setCategoria_id(event.target.value)}
        >
            <option value="">Selecciona una Categoria</option>
            {
                ListaCategoria.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre 
                        }
                    </option>
                })
            }
            </select>
      <br/>
      <label>Restaurante:&#160;&#160;</label>
      <select className="form-select"
        id = "Restaurante"
        value={Restaurante_id}
        onChange={(event) => setRestaurante_id(event.target.value)}
        >
            <option value="">Selecciona un Restaurante</option>
            {
                ListaRestaurante.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
            }
            </select>
      <br/>
      <label>Cliente:&#160;&#160;</label>
      <select className="form-select"
        id = "Cliente"
        value={Cliente_id}
        onChange={(event) => setCliente_id(event.target.value)}
        >
            <option value="">Selecciona un Cliente</option>
            {
                ListaCliente.map(function(cat){
                    return <option value={ cat.id }>
                        { cat.nombre }
                    </option>
                })
            }
            </select>
      <br/>
      <label>Estado del Pedido:&#160;&#160;</label>
      <select className="form-select"
        id = "Estado"
        value={Estado}
        onChange={(event) => setEstado(event.target.value)}
        >
            <option value="">Selecciona un Estado</option>
            <option value="1">Confirmado</option>
            <option value="2">En preparación</option>
            <option value="3">Entregado</option>
            </select>
      <br/>
      <label>Registrado:&#160;&#160;</label>
      <select className="form-select"
        id = "Registrado"
        value={Registrado}
        onChange={(event) => setRegistrado(event.target.value)}
        >
            <option value="">¿Su pedido esta activo?</option>
            <option value="1">Si</option>
            <option value="2">No</option>
            </select>
      <br/>
      </div>
      <div className='centrar'>
      <button type="button" onClick={respuesta_parte1}>Realizar Pedido</button>
      </div>
    </form>
  }
  const vacio = function(){
    console.log('Se hizo click')
    setPedido('')
    window.location.reload(true);
  }
  
  const Tabla = function(){
    if (error === "") {
      if (pedido!== "") {
        return <table>
          <br/>
          <br/>
          <button type="submit" onClick={vacio}>Vaciar Tabla</button>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
          <th>Categoria</th>
          <th>Restaurante</th>
          <th>Cliente</th>
          <th>Codigo verificación</th>
          <th>Estado</th>
          <th>Registrado</th>
        </tr>
        
          {console.log("ARRAY DE OBJETOS",pedido)}
          
        <tr>
          <th>{pedido[0].Producto}</th>
          <th>{pedido[0].Cantidad}</th>
          <th>{pedido[0].Precio}</th>
          <th>{pedido[0].Total}</th>
          <th>{pedido[0].Categoria}</th>
          <th>{pedido[0].Restaurante}</th>
          <th>{pedido[0].Cliente}</th>
          <th>{pedido[0].Codigo_verificación}</th>
          <th>{pedido[0].Estado}</th>
          <th>{pedido[0].Registrado}</th>
        </tr>
           
        
      </table>
      }
    }
    else {
      return <h2>{error}</h2>
    }
  }
  

  return <div>
    <TopNav category={3}/>
    <br />
    <h1>Registrar una entrega</h1>
    <FormRegistrar/>
    <br />
    <Tabla/>
    <br />
  </div>
}
  

export default Pedidoregistro;
