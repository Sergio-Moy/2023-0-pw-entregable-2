import { useState }from "react"
import TopNav from '../Global/TopNav'
import LogoNeon from '../../Style/img/Logo.png'
import React from 'react';
import {Link} from "react-router-dom"

function Logincomensal(props){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const butOnClick = function() {
      props.onLoginOk(usuario, password)
  }

    return <form>
      <div
            className="bg-muted p-5 rounded-5 text-secondary shadow fs-0 fw-bold"
            style={{ width: "25rem", borderRadius: "2px" }}
          >
      <img src={LogoNeon} className="centered" style={{width: "50%"}} alt="logo" />
       <div id= "contenedor centrado">
       <div> 
        <label className = "form-label">Usuario: </label>
        <input type = "text" className="form-control"
        value ={usuario}
        onChange = {function (evt){
          setUsuario(evt.target.value)
        }}/>
       </div>

       <div>
        <label className = "form-label">Password: </label>
        <input type = "text" className="form-control"
        value ={password}
        onChange = {function (evt){
          setPassword(evt.target.value)
        }}/>
       </div>
       <div className="centrar"><button type="submit" className="btn btn-light mt-4 w-10 fw-semibold shadow-sm" butOnClick={butOnClick}>Login</button></div>

</div>
</div>
       </form> 
  

      }  
     
    

export default Logincomensal