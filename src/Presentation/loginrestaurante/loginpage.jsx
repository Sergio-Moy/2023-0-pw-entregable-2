
import React, { useState } from 'react';
import TopNav from '../Global/TopNav';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://restaurantes20194359.azurewebsites.net/backend/loginrestaurante", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });
      const data = await response.json();
      console.log(data)
      if(data.error===""){
        const jsonData = JSON.stringify(data.restaurante);
        sessionStorage.setItem('data', jsonData);
        window.location.href = '/2023-0-pw-entregable-2/bienvenida';
      }
      else{
        setError("Sus credednciales son incorrectas")
      }
      
      // redirigir al usuario a la página principal
    } catch (err) {
      console.log("no ingreso")
      setError(err.message);
    }
  };

  return (
    <div>
      <TopNav category={3}/>
<div className="login-box">
        <form>
        <p>Login</p>
  <form>
  <label>Correo</label>
  <br />
    <div className="user-box">
      <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo"
/>
      <br />
      <label>Contraseña</label>
      <br />
    </div>
    <div className="user-box">
      <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
/>
    </div>
    <br />
    <button onClick={handleSubmit}>
  <span className="text">Iniciar Sesion</span>
</button>
  </form>
  <p>{error}</p>
        </form>
  
</div>
    </div>
    
  );
};

export default Login;