import { useState } from "react"

function BuscarForm(props){
    const [code, setCode] = useState("")
    const ButtonClick = function(){
        sessionStorage.setItem("CODIGO_BUSCADO", JSON.stringify(code))
        props.SeguimientoOk()
    }
    return <form>
        <div>
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