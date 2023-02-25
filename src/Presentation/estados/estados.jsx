import React, { useEffect, useState } from 'react';
import TopNav from '../Global/TopNav';

const Pedido = ({ pedido }) => {
  const [status, setStatus] = useState(pedido.status);
  
  const handlePreparadoClick = () => {
    let bodyObj = {
      id : pedido.id,
      estado : 2
    }
    let bodySTR = JSON.stringify(bodyObj)
    fetch("http://localhost:8000/backend/cambiarestado", {
      method : "POST",
      body : bodySTR
    })
    window.location.reload(true)
  };

  const handleTerminadoClick = () => {
    let bodyObj = {
      id : pedido.id,
      estado : 3
    }
    let bodySTR = JSON.stringify(bodyObj)
    fetch("http://localhost:8000/backend/cambiarestado", {
      method : "POST",
      body : bodySTR
    })
    window.location.reload(true)
  };

  const estados = ["", "Pendiente", "En preparacion", "Terminado"]

  return (
        <tr>

            <td>{pedido.id}</td>
            <td>{pedido.detalles}</td>
            <td>{estados[pedido.status]}</td>
            <td><div>
        {status === 1 && (
          <>
            <button onClick={handlePreparadoClick}>En preparación</button>
            <button onClick={handleTerminadoClick}>Terminado</button>
          </>
        )}
        {status === 2 && (
            pedido.status=2,
          <button onClick={handleTerminadoClick}>Terminado</button>
        )}
        {status === 3 && (pedido.status=3,<div>Pedido Terminado</div>)}
      </div></td>
      
        </tr>
  );
};

function Estados(){
  const [listaPedidos, setListaPedidos] = useState([])
  const obtenerPedidos = async function(){
      try{
          const response = await fetch("http://localhost:8000/backend/cambiarestado")
          const data = await response.json()
          setListaPedidos(data.arreglo)
      }
      catch(error){
          console.error("Hubo un error obteniendo los pedidos")
      }
  }

  useEffect(function(){
      obtenerPedidos()
  }, [])

  let filas = []
  for(let i = 0; i < listaPedidos.length; i++){
      let pedido = listaPedidos[i]
      let elemento = <Pedido key={pedido.id} pedido={pedido} />
      filas.push(elemento)
  }

  return <div>
      <TopNav category ={3}/>
      <br />
      <h1>Pedidos</h1>
      <table>
        <tr>
          <th><h3>ID</h3></th>
          <th><h3>Descripción</h3></th>
          <th><h3>Estado</h3></th>
          <th><h3>Botón</h3></th>
        </tr>
        {filas}
      </table>
  </div>
}

export default Estados;
