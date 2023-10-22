import React, {  useEffect, useState } from 'react';

import { APIURL } from '../../config';

import axios from 'axios';

import Order_Pickup from '../../components/OrderInCanteen_Pickup/Order_Pickup';

import '../../components/OrderInCanteen_Pickup/OrderInCanteen.css'



function Pickupall() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    // const canid = 1;
    useEffect(() => {

    

      const fetchData = async () => {
        try {
          const response = await axios.get(`${APIURL}/Order/grabbed`);
          const responseData = response.data;
          console.log(responseData);
          setData(responseData);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setLoading(true);
        }
      };
  
      fetchData(); }, []);
    
    
    return (
      <div className="OrderInCanteen">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        {loading ? ( <div className='loadingpage'> <div className='loader'></div> </div> ) : ( <div className='bigBoy'> 
          <div className='OrderInCanteen-header'> การรับหิ้วของโรงอาหาร  </div>
            <div className='OrderALL'>
            {data.map((received, index) => (
        
        <Order_Pickup key={index} fname={received.user.name} lname={received.user.lastName} phonetel={received.user.phoneNumber} userlocation={received.userLocation} food={received.food} ridername={received.raider.name} ridertel={received.raider.phoneNumber}/>
          
     
    ))}
            
            </div>
            </div> )} 
    
      </div>
    );
  }

 



  export default Pickupall;