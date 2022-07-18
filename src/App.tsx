import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm';
import PizzaForm from './components/PizzaForm/PizzaForm';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './Page/LoginPage/LoginPage';
import OrderHistory from './components/OrderHistory/OrderHistory';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PizzaHeader from './components/PizzaHeader/PizzaHeader';
import OrderDecision from './components/OrderDecision/OrderDecision';


function App() {
  const [token,setToken] = useState("");
  const [decision, setDecision] = useState("");

  
  
  return (
    <div className="App-Container">
      <header>
        <PizzaHeader pageTitle={"Pizza Picker"}/>
      </header>
      <div className='App-Body'>
        <Routes>
        {
          token.length===0 ?
          <Route path='/' element={<LoginPage storeToken={(loginToken) =>setToken(loginToken)}/>}/> 
          : decision.length ===0 ?
          <Route path='/' element={<OrderDecision logoutButton={() => setToken("")} buttonForDecision={(orderChoice) => setDecision(orderChoice)}/>}/>
          : decision==="new" ?
          <Route path='/' element={<PizzaForm authToken={token} backButton={() => setDecision("")}/>}/>
          :
          <Route path='/' element={<OrderHistory backButton={() => setDecision("")}/>}/>
          
        }
        
        
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
}
 
export default App;
