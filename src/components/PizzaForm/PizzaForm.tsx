import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import './PizzaForm.css';

type PizzaFormProps = {
  authToken: String,
  backButton: ()=> void
}

function PizzaForm(props: PizzaFormProps) {


  const [crust, setCrust] = useState("");
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [table, setTable] = useState("");

//TODO: find out how we handle the headers problem with the api
  const handleSubmit = async(event: any) =>{
    event.preventDefault();
    console.log("You have ordered a size " + size + " with " + crust + " crust, " + flavor + " flavor at table " + table );

    let orderBody = {
      "Crust": crust,
      "Flavor": flavor,
      "Size": size,
      "Table_No": Number(table)
    }


    let url = "https://cors-anywhere.herokuapp.com/https://order-pizza-api.herokuapp.com/api/orders";
    await axios.post(url, orderBody,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + props.authToken,
      },
    }).then(res => {
      toast.success('You have successfully added an order!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
          
    }).catch(err=>{
      toast.error('an error occurred while creating an order! ' + err, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    });

  }

  return (
    <div className='pizza-form-container'>
      <div className="logout-button-container">
        <button className='input-logout-button' onClick={()=> props.backButton()}>Back</button>
      </div>
      <div className="form">
      <form onSubmit={handleSubmit}>

        <div className="pizza-input-container">
          <label className='pizza-input-label'>Size : </label>
          <input type="text" name="size" required onChange={(e) => setSize(e.target.value)}/>
        </div>

        <div className="pizza-input-container">
          <label className='pizza-input-label'>Crust : </label>
          <input type="text" name="crust" required onChange={(e) => setCrust(e.target.value)}/>
        </div>

        <div className="pizza-input-container">
          <label className='pizza-input-label'>Flavor : </label>
          <input type="text" name="flavor" required onChange={(e) => setFlavor(e.target.value)}/>
        </div>

        <div className="pizza-input-container">
          <label className='pizza-input-label'>Table No. : </label>
          <input type="text" name="table" required onChange={(e) => setTable(e.target.value)}/>
        </div>

        <div className="submit-button-container">
          <input className='input-submit-button' type="submit" value="Submit"/>
        </div>

      </form>
    </div>
    </div>
  );
}

export default PizzaForm;