import TopNav from "../Global/TopNav"
import FilaSeguimiento from "./FilaSeguimiento"
import TablaSeguimiento from "./TablaSeguimiento"

function Seguimiento(props){
    const codigo = JSON.parse(sessionStorage.getItem("CODIGO_BUSCADO"))

    let arr = []

    const js = sessionStorage.getItem("PEDIDOS")
    const parsed = JSON.parse(js)
    const arreglo = parsed.arreglo

    for(let i = 0; i < arreglo.length; i++){
        let prod = arreglo[i]
        if(codigo == prod.Codigo){
            arr.push(prod)
        }
    }

    const data = JSON.stringify({arreglo : arr})

    sessionStorage.setItem("PEDIDOSMATCH" , data)

    if(arr.length==0){
        return <div>
            <TopNav category={5}/>
            <br />
            <h1>Seguimiento del pedido {codigo}</h1>
            <h2 className="centrar">Este pedido ha sido terminado o no existe</h2>
        </div>
    }
    else{
        return <div>
            <TopNav category = {5}/>
            <h1>Seguimiento del pedido {codigo}</h1>
            <br />
            <TablaSeguimiento/>
            <p className="centrar">Recoge tus items listos con el código de confirmación <b>112233</b></p>
        </div>
    }
}

export default Seguimiento