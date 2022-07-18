import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './OrderDecision.css';

type OrderDecisionProps = {
    buttonForDecision: (buttonReturnValue: string)=> void;
    logoutButton: ()=> void;
  }

function OrderDecision(props: OrderDecisionProps) {


  
  return (
    <div className='decision-container'>
      <div className='decision-logout'>
        <button onClick={() => props.logoutButton()}>Logout</button>
      </div>
      <div className='decision-button-choices'>
          <button className='decision-new-button' onClick={() => props.buttonForDecision("new")}>Create New Order</button>
          <button className='decision-history-button' onClick={() => props.buttonForDecision("history")}>Order History</button>
      </div>
    </div>
  );
}

export default OrderDecision;