import React, { useState } from 'react'
import axios from 'axios';
import './LoginForm.css';

type LoginFormProps = {
  storeToken: (token: string)=> void;
}

function LoginForm(props: LoginFormProps) {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [token,setToken] = useState("");

    
    const handleSubmit = async(event: any) =>{
        event.preventDefault();
        let credentials = {
            username: username,
            password: password
        }
        let url = "https://cors-anywhere.herokuapp.com/https://order-pizza-api.herokuapp.com/api/auth";
        const response = await axios.post(url, credentials);
        setToken(response.data.access_token);
        props.storeToken(response.data.access_token)
    }

  return (
    <div className='login-form-container'>
      
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className='login-title'>
            <h3>Login</h3>
          </div>
          <div className="login-input-container">
            <label className="login-label">Username: </label>
            <input type="text" name="uname" required onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="login-input-container">
            <label className="login-label">Password: </label>
            <input type="password" name="pass" required onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <div className="submit-button-container">
            <input className='input-submit-button' type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default LoginForm;
