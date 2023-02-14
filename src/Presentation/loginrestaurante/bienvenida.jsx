import React, { useState ,useEffect } from 'react';
import './login.css'
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



  return (
    <div>
        <p>the data is:{value.imagen}</p>
        <p>piero</p>
  
  
</div>
  );
};

export default Login;