// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import OrderInCanteen from './OrderInCanteen/OrderInCanteen';
import Pickupall from './PickupAll/Pickupall';

import NavTemplate from "./component/NavTemplate";

function App() {
  document.body.style.overflow = "hidden";
  return (
    <div style={{fontFamily:'Mitr'}}>
      <NavTemplate yourCode = {
        <div style={{width:"100%",height:'100%'}}>
          <OrderInCanteen />
        </div>
      }/>
      
    </div>
  );
}


export default App;
