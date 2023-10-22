// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';


import OrderCard from '../../components/OrderInCanteen_Pickup/OrderCard';
import '../../components/OrderInCanteen_Pickup/OrderInCanteen.css'


function OrderInCanteen() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  // const canid = 1;
  useEffect(() => {

    

    fetch('http://localhost:2580/api/Order/all')
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
      }, 2000);  }, []);
  
      return (
    <div className="OrderInCanteen">

     {loading ? ( <div className='loadingpage'> <div className='loader'></div> </div> ) : ( 
     <div className='bigBoy'>
      <div className='OrderInCanteen-header'> โรงอาหาร </div>
        
        <div className='OrderALL'>
         
          {data.map((order, index) => (
            
            <OrderCard key={index} fname={order.user.name}lname={order.user.lastName} phonetel={order.user.phoneNumber} userlocation={order.userLocation} food={order.food} orderid={order._id} />
                
            
          ))} 
         </div>





     </div> )} 
    
      
    </div>
  );
}










export default OrderInCanteen;
