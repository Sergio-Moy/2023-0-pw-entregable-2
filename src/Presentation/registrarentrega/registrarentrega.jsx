import TopNav from "../Global/TopNav"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
function Registrarentrega(){
  const [code, setcode] = useState("")
  
  const navigate = useNavigate()
  const Llamar = function(){
    navigate("/2023-0-pw-entregable-2/tabla")
  }
  return <div>
    <TopNav category={3}/>
    <br/>
    <div className='centrar'>
    <h1>Registrar Entrega</h1>
    <br/>
    <input type="text" id="code" value={code} onChange={(event) => setcode(event.target.value)}/>
    {sessionStorage.setItem('La_llave', code)}
    <br/>
    <button type="button" onClick={Llamar}>Realizar Filtro</button>
    </div>
  </div>
}

export default Registrarentrega
