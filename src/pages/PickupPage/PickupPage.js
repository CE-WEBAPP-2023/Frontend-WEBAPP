import React, {  useEffect, useState } from 'react';

import '../../components/PickupAll/Pickupall.css'
import { Link  } from 'react-router-dom'; 
function Pickupall() {
    
    
    return (
    <div className='PickCanteen'>
        <div className='text-header-canteen'>
            ตรวจสอบออเดอร์ที่หิ้วไปแล้ว 
        </div>
        <div className='PickSelect'>
            <div className='PickOrder'>
            <Link to ='/Pickupall/1'> 
                <div className='canteen A '>
                    <div className='text-click'>A</div>
                </div>
            </Link>
            <Link to ='/Pickupall/2'> 
                <div className='canteen J '>
                    <div className='text-click'>J</div>
                </div>
            </Link>
            
            <Link to ='/Pickupall/3'> 
                <div className='canteen C '>
                <div className='text-click'>C</div>
                </div>
            </Link>

            <Link to ='/Pickupall/4'> 

                <div className='canteen PT '>
                <div className='text-click'>Phra Thep</div>
                </div>
            </Link> 

            </div>
        </div>

    </div>
  );
}

 



  export default Pickupall;