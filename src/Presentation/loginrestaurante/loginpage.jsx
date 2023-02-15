
import React, { useState } from 'react';
import './login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imagen,setImagen]= useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/backend/loginrestaurante", {
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
    <div className="login-box">
        <form>
        <p>Login</p>
  <form>
    <div className="user-box">
      <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
/>
      <label>Password</label>
    </div>
    <button onClick={handleSubmit}>
  <span className="text">Button</span>
</button>
  </form>
  <p>Don't have an account? <a href="" className="a2">Sign up!</a></p>
  <p>{error}</p>
        </form>
  
</div>
  );
};

export default Login;