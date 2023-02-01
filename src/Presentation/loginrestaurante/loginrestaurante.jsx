import TopNav from '../Global/TopNav';
import React from 'react';
import LogoNeon from '../../Style/img/LogoNeon.png'

function Loginrestaurante(){
    return (
        <div>
            <TopNav category ={3}/>
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
                <div className="input-group-text bg-info">
                  <img
                    src="/imagenes/415461.png "
                    alt="username-icon"
                    style={{ height: "1rem" }}
                  />
                </div>
                <input
                  className="form-control bg-light"
                  type="text"
                  placeholder="Usuario"
                />
              </div>
              {/* ... Otros elementos aquí */}
            </div>
          </div>
        </div>
        </div>
        
      );
      
}  
     
    

export default Loginrestaurante