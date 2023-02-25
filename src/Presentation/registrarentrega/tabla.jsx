import TopNav from "../Global/TopNav"
import { useState, useEffect } from "react";
function Tabla(){
  const [pedido, setPedido] = useState("")
  const [error, setError] = useState("")
  
  const obtenerClienteAsyncAwait = async function(codigo) {
    try {
          const response = await fetch(`http://localhost:8000/backend/ObtenerSoloPedido_filrado_codigo/listar?codigo=${codigo}`)
          const data = await response.json()//Se obtiene la data en forma de objeto
      if(data.error === ""){
        setError(data.error)
        setPedido(data.Pedidos)//Variable de estado
      }else{
        setError(data.error)
      }
      
     }catch(error) {
        setError("Error obteniendo categorias")
     }
  }

  useEffect(function() {
    obtenerClienteAsyncAwait(sessionStorage.getItem('La_llave'))
  }, [])

  console.log("LISTA CLIENTE",pedido)

  const handleSubmit = async function(event){
    const body = {
      "Codigo_verificación" : sessionStorage.getItem('La_llave'),
      "estado" : 3
    }
    const response = await fetch('http://localhost:8000/backend/registrarentrega', {method : "POST",
    body : JSON.stringify(body)})
    const data = await response.json()
    if(data.error === ""){
      console.log("Sin errores",data);
    }
    
  }
  
  
  const Tabla = function(){
    if (error === "") {
      if (pedido!== "") {
        return <div>
          <div className='centrar'>
          <h4>Datos generales</h4>
          </div>
          <br/>
          <table>
            <tr>
              <th>Código de Verificacion</th>
              <th>Cliente</th>
              <th>Estado</th>
            </tr>
            <td>
              {pedido[0].codigo_verificación}
            </td>
            <td>
              {pedido[0].cliente}
            </td>
            <td>
            {pedido[0].estado}
            </td>
          </table>
          <br/>
          <div className='centrar'>
          <h4>Detalle</h4>
          </div>
          <br/>
          <table>
        <tr>
          <th>Producto</th>
          <th>cantidad</th>
          <th>precio</th>
          <th>Total</th>
        </tr>
        
          {
            pedido.map(function(cat){
              return <tr>
                <td>{cat.producto}</td>
                <td>{cat.cantidad}</td>
                <td>{cat.precio}</td>
                <td>{cat.Total}</td>
              </tr>
            })
          }
          </table>
      <br></br>
      <div className='centrar'>
        <button type="submit" onClick={handleSubmit}>Confirmar entrega</button>
        </div>
      </div>
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
    <Tabla/>
  </div>
}
export default Tabla
