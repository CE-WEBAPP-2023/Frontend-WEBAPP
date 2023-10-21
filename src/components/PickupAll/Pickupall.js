import { Component } from 'react';

import '../OrderInCanteen/OrderInCanteen.css';



import React, { useState } from 'react';

function Pickupall() {
    return (
      <div className="OrderInCanteen">
          <div className='OrderInCanteen-header'> การรับหิ้้วของคุณ </div>
            <div className='OrderALL'>
                <Order_Pickup />
                <Order_Pickup />
                <Order_Pickup />
                <Order_Pickup />
                <Order_Pickup />
            
            </div>
              
      </div>
    );
  }

  class Order_Pickup extends Component {
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
                            <span className="material-symbols-outlined">
                                call 
                            </span> 
                            <a>เบอร์โทร</a>
                            </div>

                            <div className='grid-order-detail'>
                            <span className="material-symbols-outlined">
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
                                <Menu_loop />
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
                                <button className='btn-order-status-accept blue'>หิ้วแล้ว</button>
                            </div>
                            <div className='btn-order-agree'>
                            
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
  export default Pickupall;