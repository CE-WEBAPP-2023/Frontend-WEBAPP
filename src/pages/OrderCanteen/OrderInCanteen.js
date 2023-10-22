// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { APIURL } from '../../config';
import axios from 'axios';
import OrderCard from '../../components/OrderInCanteen_Pickup/OrderCard';
import '../../components/OrderInCanteen_Pickup/OrderInCanteen.css'


function OrderInCanteen() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  // const canid = 1;
  useEffect(() => {

    

    const fetchData = async () => {
      try {
        const response = await axios.get(`${APIURL}/Order/all`);
        const responseData = response.data;
        console.log(responseData);
        // setData(data.filter((can) => (can.canteen.canteenId === canid)))
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
