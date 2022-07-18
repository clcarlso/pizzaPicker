import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import './PizzaHeader.css';

type PizzaHeaderProps = {
  pageTitle: string
}

function PizzaHeader(props: PizzaHeaderProps) {


  return (
    <div className='pizza-header-container'>
      <h1 className='pizza-header-text'>{props.pageTitle}</h1>
    </div>
  );
}

export default PizzaHeader;