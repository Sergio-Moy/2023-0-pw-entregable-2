import TopNav from "../Global/TopNav"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Registrarentrega(){
  const [pedido, setPedido] = useState("")
  const [error, setError] = useState("")
  const FormRegistrar = function(){
    const [code, setCode] = useState('');
    const handleSubmit = async function(event){
      const response = await fetch(`http://localhost:8000/backend/registrarentrega?code=${code}`)
      const data = await response.json()
      if (data.error ==="") {
        setPedido(data.producto)
      }
      else{
        setError(data.error)
      }
    }
     
    return <form>
      <label>Código de pedido</label>
      <input type="text" id="code" value={code} onChange={(event) => setCode(event.target.value)}/>
      <button type="button" onClick={handleSubmit}>Buscar Pedido</button>
    </form>
  }
  const Tabla = function(){
    if (error === "") {
      if (pedido!== "") {
        return <table>
        <tr>
          <th>Código</th>
          <th>Detalle</th>
          <th>Código de verificación</th>
        </tr>
        <tr>
          <th>{pedido.code}</th>
          <th>{pedido.desc}</th>
          <th>{pedido.code_v}</th>
          <th><button type="submit">Confirmar entrega</button></th>
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

export default Registrarentrega