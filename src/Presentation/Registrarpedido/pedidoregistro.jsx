import React, { useState } from 'react';
import TopNav from '../Global/TopNav';
function Pedidoregistro () {
  /*
  const [order, setOrder] = useState({
    name: '',
    address: '',
    date: '',
    dish: ''
  });
  const [orders, setOrders] = useState([]);

  const handleInputChange = event => {
    setOrder({ ...order, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setOrders([...orders, order]);
    setOrder({ name: '', address: '', date: '', dish: '' });
  };
  const onClearOrders = () => {
    setOrders([]);
  };
  
  return (
    <div>
      <TopNav category ={3}/>
      <div className='centrar'>
    <form onSubmit={handleSubmit} style={{paddingTop:'30px'}}>
      <div className='form-group'><input
      type="text"
      id="Nombre"
      name="name"
      value={order.name}
      onChange= {handleInputChange}
      
      placeholder="Nombre"
    /></div>
    <div className='form-group'>
    <input
      type="text"
      id = "Direccion"
      name="address"
      value={order.address}
      onChange={handleInputChange}
      placeholder="Dirección"
    />
    </div>
    <div className='form-group'>
    <input
      type="date"
      name="date"
      value={order.date}
      onChange={handleInputChange}
      placeholder="Date"
    />
    </div>
    
    <select
      id = "Producto"
      name="dish"
      value={order.dish}
      onChange={handleInputChange}
    >
      <option value="">Selecciona un plato</option>
      <option value="Pizza">Pizza</option>
      <option value="Pasta">Pasta</option>
      <option value="Salad">Salad</option>
    </select>
    <button type="submit">Realizar pedido</button>
    
  </form>
  
  </div>
  <OrderTable orders={orders} />
    <button onClick={onClearOrders}>Limpiar carrito</button>
    </div>

  );
};

const OrderTable = ({ orders }) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Día</th>
        <th>Plato</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order, index) => (
        <tr key={index}>
          <td>{order.name}</td>
          <td>{order.address}</td>
          <td>{order.date}</td>
          <td>{order.dish}</td>
        </tr>
      ))}
    </tbody>
    
  </table>
  
);*/
  const [pedido, setPedido] = useState("");
  const [error, setError] = useState("")
  const FormRegistrar = function(){
    const [Nombre, setNombre] = useState('');
    const [Producto, setProducto] = useState('');
    const [Direccion, setDireccion] = useState('');
    const [Cantidad, setCantidad] = useState('');
    const handleSubmit = async function(event){
      const body = {
        Nombre : Nombre,
        Producto : Producto,
        Direccion : Direccion,
        Cantidad : Cantidad

      }
      const response = await fetch('http://localhost:8000/backend/ObtenerPedido_Registrar_7/listar', {method : "POST",
      body : JSON.stringify(body)})

      const data = await response.json()
      if (data.error ==="") {
        setError(data.error)
        setPedido(data.producto)
      }
      else{
        setError(data.error)
      }
    }
    return <form>
      
      <br/>
      <div className='centrar'>
      <label>Nombre:&#160;&#160;</label>
      <input type="text" id="Nombre" value={Nombre} onChange={(event) => setNombre(event.target.value)}/>
      <br/>
      <label>Direccion:&#160;&#160;</label>
      <input type="text" id="code" value={Direccion} onChange={(event) => setDireccion(event.target.value)}/>
      <br/>
      <label>Cantidad:&#160;&#160;</label>
      <input type="text" id="code" value={Cantidad} onChange={(event) => setCantidad(event.target.value)}/>
      <br/>
      <label>Producto:&#160;&#160;</label>
      <select
      id = "Producto"
      value={Producto}
      onChange={(event) => setProducto(event.target.value)}>
      <option value="">Selecciona un plato</option>
      <option value="Pizza">Pizza</option>
      <option value="Pasta">Pasta</option>
      <option value="Salad">Salad</option>
      </select>
      <br/>
      </div>
      <div className='centrar'>
      <button type="button" onClick={handleSubmit}>Realizar Pedido</button>
      </div>
    </form>
  }
  const vacio = function(){
    console.log('Se hizo click')
    setPedido('')
  }
  const Registro = function(){
    const temporal = []
    pedido.forEachfunction(function(pelicula, index) {
      temporal.push(
        <tr>
          <th>{pedido[index].Nombre}</th>
          <th>{pedido[index].Producto}</th>
          <th>{pedido[index].Direccion}</th>
          <th>{pedido[index].Cantidad}</th>
        </tr>
      )
      
    })
    return temporal
  }
  const Tabla = function(){
    if (error === "") {
      if (pedido!== "") {
        return <table>
          <br/>
          <br/>
          <button type="submit" onClick={vacio}>Vaciar Tabla</button>
        <tr>
          <th>Nombre</th>
          <th>Producto</th>
          <th>Direccion</th>
          <th>Cantidad</th>
        </tr>
        
          {console.log("ARRAY DE OBJETOS",pedido)}
          
        <tr>
          <th>{pedido[0].Nombre}</th>
          <th>{pedido[0].Producto}</th>
          <th>{pedido[0].Direccion}</th>
          <th>{pedido[0].Cantidad}</th>
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
    <Tabla/>
  </div>
}
  

export default Pedidoregistro;
