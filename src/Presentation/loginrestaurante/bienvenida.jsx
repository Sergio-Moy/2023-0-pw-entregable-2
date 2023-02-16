import React, { useState ,useEffect } from 'react';
import './bienvenida.css'
import TopNav from '../Global/TopNav';
const Login = () => {
    const [value, setValue] = useState('');
  

  useEffect(() => {
    // Update the document title using the browser API
    const storedValue = sessionStorage.getItem('data');
    console.log(storedValue)
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
  }, []);

  const cerrarsesion =  function(
    
) {
  window.location.href = '/2023-0-pw-entregable-2/loginpage';
    }

  const registrarplato= function(){
    window.location.href='/2023-0-pw-entregable-2/NuevoPlato';
  }
  const registrarcategoria= function(){
    window.location.href='/2023-0-pw-entregable-2/registrarcategoria';
  }
  const mispedidos = function(){
    window.location.href='/2023-0-pw-entregable-2/platosregistrados';
  }
    
  




  return (
    <div>
      
        <TopNav category={3}></TopNav>
        <div style={{marginLeft: "1800px"}}>
        <svg onClick={cerrarsesion}fill="#000000" height="50px" width="50px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 384.971 384.971" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <g id="Sign_Out"> <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03 C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03 C192.485,366.299,187.095,360.91,180.455,360.91z" /> <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279 c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179 c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" /> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
        </div>
        

        
 <div className="centrar">
        <div className="cardbienvenida">
  <div className="pricing-block-content">
  <p className="pricing-plan">Bienvenido</p>
  <p className="pricing-plan">{value.nombre}</p>
    <img className="bienvenidaimagen"src={value.imagen} alt="" />
    
    <div>
    <button className='botonbienvenida' onClick={registrarcategoria}>
  <span>Registrar categoría</span>
</button>
    </div>
    <div>
    <button className='botonbienvenida' onClick={registrarplato}>
  <span>Registrar plato</span>
</button>
    </div>
    <div>
    <button className='botonbienvenida' onClick={mispedidos}>
  <span>Mis pedidos</span>
</button>
    </div>

   
   


  </div></div>
    </div>
    </div>
   
        

  
  

  );
};

export default Login;