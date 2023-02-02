
import React from 'react';
import LogoNeon from '../../Style/img/Logo.png'
import logousuario from '../../Style/img/2550260.png'
import contraseña from '../../Style/img/483408.png'
import { useState } from "react"
function Loginrestaurante(props){
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const butOnClick = function() {
      console.log("USuario:", usuario)
      console.log("Password:", password)
      props.onLoginOk(usuario, password)
  }
    return (
        <div>
            
            <div className="centrar">
          <div
            className="bg-white p-5 rounded-5 text-secondary shadow"
            style={{ width: "25rem", borderRadius: "5px" }}
          >
            <div id="contenedorcentrado">
              <div className="d-flex justify-content-center">
              <img src={LogoNeon} className="centered" style={{width: "50%"}} alt="logo" />
              </div>
              <div className="text-center fs-1 fw-bold">Login</div>
              <div className="input-group mt-4">
                <div className="input-group-text bg-info" style={{height: "25 px"}}>
                  <img
                    src={logousuario}
                    alt="username-icon"
                    style={{ height: "1.7rem" }}
                  />
                </div>
                <input
                  className="form-control bg-light"
                  type="text"
                  placeholder="Usuario"
                  value={usuario}
                  onChange={function(evt){setUsuario(evt.target.value)}}
                  
                />

              </div>
              <div className="input-group mt-4">
                <div className="input-group-text bg-info" style={{height: "25%"}}>
                  <img
                    src={contraseña}
                    alt="username-icon"
                    style={{ height: "1.7rem" }}
                  />
                </div>
                <input
                  className="form-control bg-light"
                  type="text"
                  placeholder="Contraseña"
                  value={password}
                  onChange={ function(evt) { setPassword(evt.target.value) } }
                />
                 <div class="btn btn-info text-white w-100 mt-4 fw-semibold shadow-sm"
                 onClick={butOnClick}>
            Iniciar sesion
          </div>    
             
          
        </div>
            </div>
          </div>
        </div>
        </div>
        
      );
      
}  
     
    

export default Loginrestaurante;