// import logo from './logo.svg';
import React, { Component, useEffect, useState } from 'react';

import './OrderInCanteen.css';



function OrderInCanteen() {

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:2580/api/Order/all');
            if (response.ok) {
              const data = await response.json();
              console.log(data);
            } else {
              console.error('Failed to fetch data');
            }
          } catch (error) {
            console.error('An error occurred:', error);
          }
        };
    
        fetchData();
      }, []);
    
      
  
      return (
    <div className="OrderInCanteen">
        <div className='OrderInCanteen-header'> โรงอาหาร x </div>
       <div className='OrderALL'>
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
            <Order />
        </div>
    </div>
  );
}




class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isListShown: true,
            showMenuDetail: false,
            
        };
      }
    

      
  toggleMenuDetail = () => {
    this.setState((prevState) => ({
      isListShown: !prevState.isListShown,
        showMenuDetail: !prevState.showMenuDetail,
       
    }));
  };

    render() {
         const { isListShown } = this.state;
        return (
            <div className="Order">
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
                            <a>ชื่อลูกค้า</a>
                            </div>

                            <div className='grid-order-detail'>
                            <span class="material-symbols-outlined">
                                call 
                            </span> 
                            <a>เบอร์โทร</a>
                            </div>

                            <div className='grid-order-detail'>
                            <span class="material-symbols-outlined">
                                near_me  
                            </span> 
                            <a>ปลายทาง</a>
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
                                <Menu_loop />
                                <Menu_loop />
                                <Menu_loop />
                                <Menu_loop />
                               
                            </div>
                        
                        </div>

                        </div>
                    </div>
                    <div className='Order-card-btn'>
                        <div className='btn-order-grid'>
                            <div className='btn-order-status'>
                                <a>สถานะ:</a> <br />
                                <button className='btn-order-status-accept green'>หิ้วได้น้า</button>
                            </div>
                            <div className='btn-order-agree'>
                            <button className='btn-order-accept orange'><a>รับงาน</a></button>
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
        return (
            <div className='Order-card-menudetail-detail-menu-section'>
                <div className='Order-card-menudetail-detail-menu-section-count'>1</div>
                <div className='Order-card-menudetail-detail-menu-section-name'>ข้าวมันไก่ทอด
                <p>ไม่ใส่แตงกวา เพิ่มซีฮ๊วหวาน</p>
                </div>
                <div className='Order-card-menudetail-detail-menu-section-price'>45</div>
            </div>  
        );

        }
}


export default OrderInCanteen;
