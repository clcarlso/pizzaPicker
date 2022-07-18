import React, { useState } from 'react'
import axios from 'axios';
import { tokenToString } from 'typescript';
import './OrderCard.css';

type OrderCardProps = {
  crust?: string,
  flavor?: string,
  size?: string,
  table_no?: number,
  orderID?: number
  deleteRecord: (orderID?: number)=> void;
}

function OrderCard(props: OrderCardProps) {



  return (
    <div className='order-card-container'>
      <div className='input-container'>
        <label className='input-label'>Order ID : </label>
        <label className='order-id-content'> {props.orderID}</label>
      </div>
      <div className='input-container'>
        <label className='input-label'  >Table_No. : </label>
        <label className='table-no-content'> {props.table_no}</label>
      </div>
      <div className='input-container'>
        <label className='input-label'>Crust : </label>
        <label className='crust-content'> {props.crust}</label>
      </div>
      <div className='input-container'>
        <label className='input-label'>Flavor : </label>
        <label className='flavor-content'> {props.flavor}</label>
      </div>
      <div className='input-container'>
        <label className='input-label'>Size : </label>
        <label className='size-content'> {props.size}</label>
      </div>
      {
        props.orderID !== null ?
      <div className='delete-button-container'>
        <button className='delete-button' onClick={() => props.deleteRecord(props.orderID)}> Delete </button>
      </div>
      : null
      }
    </div>
  );
}

export default OrderCard;