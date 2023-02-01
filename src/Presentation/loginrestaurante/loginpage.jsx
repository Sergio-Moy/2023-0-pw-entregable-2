import { useNavigate } from "react-router-dom"
import Loginrestaurante from "./loginrestaurante"
import TopNav from '../Global/TopNav';
function LoginPage() {

    const navigate = useNavigate()

    const onLoginOk = function(
        usuario, password
    ) {
        if (usuario === "pw" 
            && password === "123") {

            const dataUsuario = {
                username : usuario,
                password : password
            }

            // JSON.stringify : convierte objetos js a JSON (string)
            const dataUsuarioJSON = JSON.stringify(dataUsuario)
            console.log(dataUsuario)
            console.log(dataUsuarioJSON)
            // Guardado en session storage
            sessionStorage.setItem("DATA_USUARIO", dataUsuarioJSON)


            navigate("/MainPage", {
                state : {
                    username : usuario
                }
            })
        }
    }

    return <div>
        <TopNav category ={3}/>
        <div className="container">
    <div className="row">
        <div className="col"></div>
        <div className="col">
            <Loginrestaurante 
                onLoginOk={ onLoginOk } />
        </div>
        <div className="col"></div>
    </div>
</div></div>
    
}

export default LoginPage