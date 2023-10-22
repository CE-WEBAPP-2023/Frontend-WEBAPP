import React, {  useEffect, useState } from 'react';




import Order_Pickup from '../../components/OrderInCanteen_Pickup/Order_Pickup';

import '../../components/OrderInCanteen_Pickup/OrderInCanteen.css'



function Pickupall() {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    // const canid = 1;
    useEffect(() => {

      fetch('http://localhost:2580/api/Order/grabbed')
        .then(response => response.json())
        
        .then(data => { 
          console.log(data)
          
          // setData(data.filter((can) => (can.canteen.canteenId === canid)))
          setData(data);
        })
        .catch(error => console.error(error));
   
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        },2000); }, []);
    
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