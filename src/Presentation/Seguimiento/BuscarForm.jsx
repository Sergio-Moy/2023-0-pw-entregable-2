import TopNav from "../Global/TopNav"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function BuscarForm(){
    const navigate = useNavigate()

    const SeguimientoOk = function(){
        navigate("/2023-0-pw-entregable-2/seguimiento")
    }
    const [code, setCode] = useState("")
    const ButtonClick = function(){
        sessionStorage.setItem("CODIGO_BUSCADO", JSON.stringify(code))
        SeguimientoOk()
    }
    return <form>
        <div>
            <TopNav category = {5}/>
            <h1>Buscar pedido</h1>
            <label className="form-label centrar">Código de pedido:</label>
            <input type="text" className="form-control centered" value={code}
            onChange={function(evt){
                setCode(evt.target.value)
            }}/>
        </div>
        <button type="submit" className="centered btn btn-outline-light"
        onClick={ButtonClick}>Buscar</button>
    </form>
}
export default BuscarForm