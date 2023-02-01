import useRows from "./hooks/useRows";
import CardPedidos from "./CardPedidos";
function ListaPedidos() {
    const listarow = []//Lista de filas
    let listacol = []//Lista de columnas
    const data = useRows();

    data.forEach(function (pedido, index) {
        if (index % 3 !== 0) {
            listacol.push(
                <div className="col-md-4"><CardPedidos pedi={pedido} /></div>
            )
            console.log(listacol)
        } else {
            if (index !== 0) {
                listarow.push(
                    <div className="row">{listacol}
                    </div>
                )
                listacol = []
            }
            listacol.push(
                <div className="col-md-4"><CardPedidos pedi={pedido} /></div>
            )

            console.log(listacol)

        }

    })
    if (data.length !== 0){
        listarow.push(
            <div className="row">{ listacol }</div>
        )
    } 
    
    /*
    if(data.length % 2 !== 0){
        listacol = []
        listacol.push(
            <div className="col-md-4"><CardPedidos pedi={data[data.length-1]} />
            </div>
        )
        listarow.push(
            <div className="row">{ listacol }</div>
        )
    }*/
    return <div>
        {
            listarow
        }
    </div>
}
export default ListaPedidos