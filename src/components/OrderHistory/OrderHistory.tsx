import React, { ReactNode, useEffect, useState } from 'react'
import axios from 'axios';
import OrderCard from '../OrderCard/OrderCard';
import { toast } from 'react-toastify';
import './OrderHistory.css';

type OrderHistoryProps = {
  
  backButton: ()=> void;
}

function OrderHistory(props: OrderHistoryProps) {

  let data:any = [];

  const [dataResults, setDataResults] = useState([
    {
      Crust: "",
      Flavor: "",
      Order_ID: 0,
      Size: "",
      Table_No: 0
    }
  ]);
  const [filteredDataResults, setFilteredDataResults] = useState([
    {
      Crust: "",
      Flavor: "",
      Order_ID: 0,
      Size: "",
      Table_No: 0
    }
  ]);

  async function deleteRecord(orderID?: number){
    if (orderID !== null){
      let url = "https://cors-anywhere.herokuapp.com/https://order-pizza-api.herokuapp.com/api/orders/"+ orderID;
      await axios.delete(url, {method: 'DELETE',headers: {'Accept': 'application/json'}
      }).then(res => {
        toast.success('You have successfully deleted an order!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          fetchData();
      }).catch(err => {
        toast.error('an error occurred while deleting an order! ' + err, {
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
  }
  const notify = () => toast("Wow so easy!");

  const fetchData = async () =>{
    let url = "https://cors-anywhere.herokuapp.com/https://order-pizza-api.herokuapp.com/api/orders";
    const response = await axios.get(url, {method: 'GET',headers: {'Accept': 'application/json'},});
    data = response.data;
    setDataResults(data);
    setFilteredDataResults(data);

    
    }
  useEffect(() => {
    // Run! Like go get some data from an API.
    fetchData();

  }, []);


  function filterData(result: string){
  
    let filteredArr = dataResults.filter(item => 
      {
        return (item.Crust.toLowerCase().includes(result.toLowerCase()) ||
        item.Flavor.toLowerCase().includes(result.toLowerCase()) || 
        item.Size.toLowerCase().includes(result.toLowerCase()) ||
        item.Order_ID.toString().toLowerCase().includes(result.toLowerCase()) || 
        item.Table_No.toString().toLowerCase().includes(result.toLowerCase())
        );
        
    });
    setFilteredDataResults(filteredArr);
  }

  return (
    <>
      <button onClick={()=> props.backButton()}>Back</button>
      <div className="input-container">
          <label className="filter-input-label">Filter: </label>
          <input type="text" name="size" onChange={(e) => filterData(e.target.value)}/>
        </div>
        <div className='order-data-container'>
          {
            filteredDataResults ?
            
            filteredDataResults.map((record) => {
              return(
                <div className='order-card-divider'>
                  <OrderCard 
                    key={record.Order_ID} 
                    crust={record.Crust} 
                    flavor={record.Flavor} 
                    orderID={record.Order_ID} 
                    size={record.Size} 
                    table_no={record.Table_No} 
                    deleteRecord={(orderID) =>deleteRecord(orderID)}
                  />
              </div>
              )
            })
            : null
          }
      </div>
    </>
  );
}

export default OrderHistory;
