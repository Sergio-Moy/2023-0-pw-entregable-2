import { useNavigate } from  "react-router-dom"
 import Logincomensal from "./logincomensal"
 import TopNav from '../Global/TopNav';
 function Page (){
    const navigate = useNavigate()
    const onLoginOK = function (usuario, password){
        if (usuario === "20202689" && password=== "jazmin"){
            const dataUsuario ={
                username: usuario,
                password : password
            }

            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)
            navigate("/2023-0-pw-entregable-2/listadorestaurantes", {
                state :{ username : usuario}
            })
        }
    }
    return <div>
        <TopNav category ={2}/>
        <div className="container">
    <div className="row">
        <div className="col"></div>
        <div className="col">
            <Logincomensal
                onLoginOk={ onLoginOK } />
        </div>
        <div className="col"></div>
    </div>
</div></div>
 }

 export default Page;