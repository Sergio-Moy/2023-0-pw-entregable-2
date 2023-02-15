import React, { useEffect, useState } from 'react';
import TopNav from '../Global/TopNav';

let cambios = ""
if (sessionStorage["CAMBIOS"]) {
  let obj = JSON.parse(sessionStorage.getItem("CAMBIOS"))
  let arr = obj.arreglo
  cambios = arr
}

const Pedido = ({ pedido }) => {
  const [status, setStatus] = useState(pedido.status);
  
  const handlePreparadoClick = () => {
    setStatus(1);
    let id = pedido.id - 1
    cambios[id]  = 1
    let obj = JSON.stringify({arreglo : cambios})
    sessionStorage.setItem("CAMBIOS", obj)
  };

  const handleTerminadoClick = () => {
    setStatus(2);
    let id = pedido.id - 1
    cambios[id]  = 1
    let obj = JSON.stringify({arreglo : cambios})
    sessionStorage.setItem("CAMBIOS", obj)
  };

  const estados = ["Pendiente", "En preparacion", "Terminado"]

  return (
        <tr>

            <td>{pedido.id}</td>
            <td>{pedido.detalles}</td>
            <td>{estados[pedido.status]}</td>
            <td><div>
        {status === 0 && (
          <>
            <button onClick={handlePreparadoClick}>Preparado</button>
            <button onClick={handleTerminadoClick}>Terminado</button>
          </>
        )}
        {status === 1 && (
            pedido.status=1,
          <button onClick={handleTerminadoClick}>Terminado</button>
        )}
        {status === 2 && (pedido.status=2,<div>Pedido Terminado</div>)}
      </div></td>
      
        </tr>
  );
};

function Estados(){
  if(cambios === ""){
    cambios = [0, 0, 0, 0]}
  let cuerpo =  {
    1 : cambios[0],
    2 : cambios[1],
    3 : cambios[2],
    4 : cambios[3],
  }
  const [listaPedidos, setListaPedidos] = useState([])
  const obtenerPedidos = async function(){
      try{
          const response = await fetch("http://localhost:8000/backend/cambiarestado", {
            method : "POST",
            body : JSON.stringify(cuerpo)
          })
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
