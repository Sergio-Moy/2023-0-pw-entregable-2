import { useState }from "react"
import TopNav from '../Global/TopNav'
import React from 'react';
import {Link} from "react-router-dom"

function Logincomensal(props){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const butOnClick = function() {
      props.onLoginOk(usuario, password)
  }

    return <form>
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
<button type="submit" className="btn btn-sucess mt-3" butOnClick={butOnClick}>Login</button>
       </form> 
  
      }  
     
    

export default Logincomensal