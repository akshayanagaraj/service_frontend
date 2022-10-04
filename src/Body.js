import React, {useState} from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Order from './Order';
  import OrderDetails from './OrderDetails';
  

export default function Body() {
    const [orderstate, setOrderState] = useState({})
  return (
    <div className='body'>
       <BrowserRouter>
      <Routes>
        <Route path="service" element={<Order orderstate={orderstate} setOrderState={setOrderState}/>} />
        <Route path="service/bill" element={<OrderDetails orderstate={orderstate} setOrderState={setOrderState}/>} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}
