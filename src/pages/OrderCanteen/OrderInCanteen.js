// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import { APIURL } from '../../config';
import axios from 'axios';
import OrderCard from '../../components/OrderInCanteen_Pickup/OrderCard';
import '../../components/OrderInCanteen_Pickup/OrderInCanteen.css'
import { useParams } from 'react-router-dom'; 

function OrderInCanteen() {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const canteenName = ["A","J","C","พระเทพ"]
  const { canId } = useParams();
  const Cid = parseInt(canId);
  // const canId = 1;
  useEffect(() => {

    

    const fetchData = async () => {
      try {
        const response = await axios.get(`${APIURL}/Order/all`);
        const responseData = response.data;
        console.log(responseData);
        setData(responseData.filter((can) => (can.canteen.canteenId === Cid)))
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(true);
      }
    };

    fetchData(); 
  }, []);
  
      return (
    <div className="OrderInCanteen">

     {loading ? ( <div className='loadingpage'> <div className='loader'></div> </div> ) : ( 
     <div className='bigBoy'>
      <div className='OrderInCanteen-header'> โรงอาหาร {canteenName[Cid-1]} </div>
        
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
