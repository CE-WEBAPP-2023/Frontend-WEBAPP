// import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react';

import './OrderInCanteen.css';


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

     {loading ? ( <div className='loadingpage'> <div className='loader'></div> </div> ) : ( <div>




      <div className='OrderInCanteen-header'> โรงอาหาร {} </div>
        
        <div className='OrderALL'>
         
          
        {data.map((order, index) => (
         
             <Order key={index} fname={order.user.name}lname={order.user.lastName} phonetel={order.user.phoneNumber} userlocation={order.userLocation} food={order.food} orderid={order._id} />
               
          
         ))}
             
             
             
         </div>





     </div> )} 
    
      
    </div>
  );
}




class Order extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
          isListShown: true,
            showMenuDetail: false,
            isPopupOpen: false,   
            
        };
      }

      openPopup = () => {
        this.setState({ isPopupOpen: true });
      }
    
      // ปิด Popup
      closePopup = () => {
        this.setState({ isPopupOpen: false });
      }
    
    

      
  toggleMenuDetail = () => {
    this.setState((prevState) => ({
      isListShown: !prevState.isListShown,
        showMenuDetail: !prevState.showMenuDetail,
        
       
    }));
  };

    render() {
         const { isListShown } = this.state;
         const {fname, lname, phonetel, userlocation ,food ,orderid} = this.props;
        return (
        
            <div className="Order">
             
               
                <div className='Order-card'>

                    <div className='Order-card-order'>
                        
                        <div className='header-order'>
                            
                            <div className='Order-card-order-detail'>
                            <h3>Order </h3>
                            <div className='Order-card-order-detail-detail'>

                            <div className='grid-order-detail'>
                            <span class="material-symbols-outlined">
                                account_circle  
                            </span> 
                            <a>{fname} {lname}</a>
                            </div>

                            <div className='grid-order-detail'>
                            <span class="material-symbols-outlined">
                                call 
                            </span> 
                            <a>{phonetel}</a>
                            </div>

                            <div className='grid-order-detail'>
                            <span class="material-symbols-outlined">
                                near_me  
                            </span> 
                            <a>{userlocation}</a>
                            </div>
                               
                            </div>
                            
                           
                            </div>
                            

                            <div className='btn-on-off-menu'>
                            
                                <button className='btn-on-menu' onClick={this.toggleMenuDetail} >
                                   
                                <span
            className={`material-symbols-outlined ${isListShown ? '' : 'rotate180'}`}
          >
            {isListShown ? 'List' : 'menu_open'}
          </span>
                                </button>
                            </div>
                            
                            </div>
                        
                    </div>

                    
                      
                    <div className={`Order-card-menudetail ${this.state.showMenuDetail ? 'visible' : 'hidden'}`}>
                        <a>รายการอาหาร</a>

                        <div className='Order-card-menudetail-detail'>
                       
                        
                        <h4>เมนู</h4>
                        <div className='Order-card-menudetail-detail-menu'>
                            <div className='Order-card-menudetail-detail-menu-overflow'>
                           
                           
                                {food.map((food, index) => (
                                    <Menu_loop key={index} foodname={food.name} foodquatiy={food.quantity} />
                                ))}
                               
                            </div>
                        
                        </div>

                        </div>
                    </div>
                    <div className='Order-card-btn'>
                      
                        <div className='btn-order-grid' style={{ paddingLeft: '10px'  , paddingTop:'10px'}}>
                            <div className='btn-order-status'>
                                <a>สถานะ:</a> <br />
                                <button className='btn-order-status-accept green'  >หิ้วได้น้า</button>
                                
                            </div>
                            <div className='btn-order-agree'>
                            <button className='btn-order-accept orange 'onClick={this.openPopup}  ><a>รับงาน</a></button>
                            {this.state.isPopupOpen && (
          <div>
            <div className='pop-up-overlay'></div>
            <Popupselect onClose={this.closePopup} fname={fname} lname={lname} phonetel={phonetel} userlocation={userlocation} food={food} orderid={orderid}   />
          </div>
        )}
                            </div>
                                
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

class Menu_loop extends Component {
    render() {
      const {foodname, foodquatiy} = this.props;
        return (
            <div className='Order-card-menudetail-detail-menu-section'>
                <div className='Order-card-menudetail-detail-menu-section-count'><a>{foodquatiy}</a></div>
                <div className='Order-card-menudetail-detail-menu-section-name'>{foodname}</div>
                {/* <p>ไม่ใส่แตงกวา เพิ่มซีฮ๊วหวาน</p> */}
                </div>
              
           
        );

        }
}


class Popupselect extends Component {

  handleClose = () => {
    this.props.onClose(); // ส่งคำสั่งไปยัง YourComponent เพื่อปิด Popup
  }

  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      
      isListShown: true,
        showMenuDetail: false,

        name: '',
        phoneNumber: '',
        lastName: '',
        formErrors: {
          name: '',
          phoneNumber: '',
          lastName: '',
        },
      
        
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  handleClick = () => {
    // ตรวจสอบค่าว่างในชื่อผู้รับหิ้วและเบอร์โทรติดต่อ
    let formErrors = { ...this.state.formErrors };
    if (this.state.name.trim() === '') {
      formErrors.name = 'กรุณากรอกชื่อผู้รับหิ้ว';
    } else {
      formErrors.name = '';
    }

    if (this.state.phoneNumber.trim() === '') {
      formErrors.phoneNumber = 'กรุณากรอกเบอร์โทรติดต่อ';
    } else {
      formErrors.phoneNumber = '';
    }

    this.setState({ formErrors });

    // ตรวจสอบว่าไม่มีข้อผิดพลาดในฟอร์มก่อนส่งข้อมูล
    if (formErrors.name === '' && formErrors.phoneNumber === '') {
      // ส่งข้อมูล HTTP PUT request ไปยังเซิร์ฟเวอร์
      
      const url = `http://localhost:2580/api/Order/grab/${this.props.orderid}`;
      
      const data = {
        name: this.state.name,
        lastName: this.state.lastName,
        phoneNumber: this.state.phoneNumber,
      };

      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => {response.text()
        }
        )
        .then((result) => {
          console.log('ส่งข้อมูลสำเร็จ', result);
          this.handleClose();
          // ทำอะไรสักอย่างหลังจากส่งข้อมูลสำเร็จ
        })
        .catch((error) => {
          console.error('เกิดข้อผิดพลาดในการส่งข้อมูล:', error);
        });
    }
  }


  
toggleMenuDetail = () => {
this.setState((prevState) => ({
  isListShown: !prevState.isListShown,
    showMenuDetail: !prevState.showMenuDetail,
   
}));
};

  render() {
    const { isListShown } = this.state;
    const {fname, lname, phonetel, userlocation ,food } = this.props;
    const nameErrorClass = this.state.formErrors.name ? 'error-border' : '';
    const phoneNumberErrorClass = this.state.formErrors.phoneNumber ? 'error-border' : '';
    return (
      <div className="Order-pop">
      <div className='Order-card'>

          <div className='Order-card-order'>
              
              <div className='header-order'>
                  
                  <div className='Order-card-order-detail'>
                  <h3>Order</h3>
                  <div className='Order-card-order-detail-detail'>

                  <div className='grid-order-detail'>
                  <span class="material-symbols-outlined">
                      account_circle  
                  </span> 
                  <a> {fname} {lname}</a>
                  </div>

                  <div className='grid-order-detail'>
                  <span class="material-symbols-outlined">
                      call 
                  </span> 
                  <a>{phonetel}</a>
                  </div>

                  <div className='grid-order-detail'>
                  <span class="material-symbols-outlined">
                      near_me  
                  </span> 
                  <a>{userlocation}</a>
                  </div>
                     
                  </div>
                  
                 
                  </div>
                  

                  <div className='btn-on-off-menu'>
                  
                      <button className='btn-on-menu' onClick={this.toggleMenuDetail} >
                         
                      <span
  className={`material-symbols-outlined ${isListShown ? '' : 'rotate180'}`}
>
  {isListShown ? 'List' : 'menu_open'}
</span>
                      </button>
                  </div>
                  
                  </div>
              
          </div>

          
            
          <div className={`Order-card-menudetail ${this.state.showMenuDetail ? 'visible' : 'hidden'}`}>
              <a>รายการอาหาร</a>

              <div className='Order-card-menudetail-detail'>
             
              
              <h4>เมนู</h4>
              <div className='Order-card-menudetail-detail-menu'>
                  <div className='Order-card-menudetail-detail-menu-overflow'>
                  {food.map((food, index) => (
                                    <Menu_loop key={index} foodname={food.name} foodquatiy={food.quantity} />
                                ))}
                      
                     
                  </div>
              
              </div>

              </div>
          </div>
          <div className='Order-card-btn-popup'>
       
              <div className='form-hiip'>
            
                 <div className='form-hiip-detail'>
                  <a>ชื่อผู้รับหิ้ว</a>
                  <br />
                  <input
                         className={`form-input-detail ${nameErrorClass}`}
                        type="text"
                        placeholder="ชื่อผู้รับหิ้ว"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                  />  
                  <br />
                  <a>เบอร์โทรติดต่อ</a>
                  <br />
                    <input
                      className={`form-input-detail ${phoneNumberErrorClass}`}
                      type="text"
                      placeholder="เบอร์โทรติดต่อ"
                      name="phoneNumber"
                      value={this.state.phoneNumber}
                      onChange={this.handleInputChange}
                    /> 
                    

                 </div>

                 <div className='btn-order-grid popup'>
                 
                           
                            <div className='btn-order-agree start'>
                            <button className='btn-order-accept orange' onClick={this.handleClick} ><a>รับงาน</a></button>
                            {this.state.isPopupOpen && (
        <Popupselect onClose={() => this.setState({ isPopupOpen: false })} />
      )}
                            </div>

                            <div className='btn-order-agree'>
                            <button className='btn-order-status-cancel' onClick={this.handleClose} ><a>ยกเลิก</a></button>
                            </div>






                            

                                
                        </div>
                      
              </div>

          
          </div>

      </div>
  </div>
    );

    }
}


export default OrderInCanteen;
