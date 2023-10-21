import './OrderPage.css';
import InputField from '../../components/OrderPage/InputField';
import React, { useState } from "react";
import { APIURL } from '../../config';
console.log(APIURL);

function OrderPage() {
    const [count, setCount] = useState(1);
    const [menuName, setMenuName] = useState(''); // State to store the menu name
    const [orders, setOrders] = useState([]);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleMenuNameChange(event) {
        setMenuName(event.target.value);
    }

    function addOrder() {
        const newOrder = {
            item: menuName,
            count: count,
        };

        if (newOrder.item === '' || newOrder.count === '') {
            return alert('โปรดกรอกเมนูให้ครบถ้วน');
        }

        setOrders([...orders, newOrder]);

        setCount(1);
        setMenuName('');
    }

    return (
        <div className="orderpage">
            <div className='box'>
                <div className='inputbox'>
                    <div className='inputbox'>
                        <h1>กรอกข้อมูลส่วนตัว</h1>
                        <div className='personinputbox'>
                            <InputField name='fname' title='ชื่อจริง' placeholder='นายสมชาย'/>
                            <InputField name='lname' title='นามสกุล' placeholder='ชายสมชื่อ'/>
                            <InputField name='tel' title='เบอร์โทร' placeholder='09x-xxx-xxxx' />
                            <InputField name='address' title='ที่อยู่' placeholder='ใต้สะพานลอย' />
                        </div>    
                    </div>                        
                    <div className='menuinputbox'>
                        <h1>เมนู</h1>
                        <div className='menu'>
                            <div className='userinput'>
                                <input
                                    type="text"
                                    placeholder="ข้าวแกงนกพิราบ + ไข่แมลงปอ"
                                    value={menuName}
                                    onChange={handleMenuNameChange}
                                />
                                <div className='counter'>
                                    <button onClick={decrement}>-</button>
                                    <p>{count}</p>
                                    <button onClick={increment}>+</button>
                                </div>
                            </div>
                            <button className='adder' onClick={addOrder}>เพิ่ม</button>
                        </div>
                    </div>
                </div>
                <div className='menulist'>
                    {orders.map((order, index) => (
                        <div key={index} className='order'>
                            <div className='ordername'>
                                <p>{order.item}</p>
                            </div>
                            <div className='ordercount'>
                                <p>x {order.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='submit'>ถัดไป</button>
            </div>
        </div>
    );
}

export default OrderPage;