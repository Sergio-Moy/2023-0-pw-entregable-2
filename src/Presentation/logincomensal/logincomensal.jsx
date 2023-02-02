import TopNav from '../Global/TopNav';
import React from 'react';
import {Link} from "react-router-dom";

function Logincomensal(){
    return <div>
        <TopNav category ={2}/>
        <div id="contenedorlogin">
        <div className="container centrar" id="contenedorcentrado2">
          <div className="form sign-up-container">
            <h1>REGISTRARSE</h1>
            <form className="formulario">
              <input type="text" placeholder="Nombre" name="nombre" id="name" />
              <br />
              <input type="email" placeholder="Email" name="email" id="email" />
              <br />
              <input type="password" placeholder="Contraseña" name="password" id="password" />
              <br />
              <Link to="" className="ok-account">¿Ya tienes una cuenta?</Link>
              <br />
              <input type="submit" value="Registrarse" />
            </form>
          </div>
    
          <div className="form sign-in-container">
            <h1>Iniciar sesión</h1>
            <form className="formulario2">
              <input type="email" placeholder="Email" id="email2" />
              <br />
              <input type="password" placeholder="Contraseña" id="password2" />
              <br />
              <Link to="" className="no-account">¿Aun no tienes cuenta?</Link>
              <br />
              <input type="submit" value="Iniciar Sesión" />
            </form>
          </div>
        </div>
        </div>
        
        </div>
      
}  
     
    

export default Logincomensal