import './OrderPage.css';
import InputField from '../../components/OrderPage/InputField';
import React, { useState } from "react";

function OrderPage() {

    const [count, setCount] = useState(1);

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    return (
        <div className="orderpage">
            <h1>กรอกข้อมูลส่วนตัว</h1>
            <InputField name='fname' title='ชื่อจริง' placeholder='นายสมชาย'/>
            <InputField name='lname' title='นามสกุล' placeholder='ชายสมชื่อ'/>
            <InputField name='tel' title='เบอร์โทร' placeholder='09x-xxx-xxxx' />
            <InputField name='address' title='ที่อยู่' placeholder='ใต้สะพานลอย' />
            <h1>เมนู</h1>
            <div className='menu'>
                <input type="text" placeholder="ข้าวแกงนกพิราบ + ไข่แมลงปอ" />
                <div className='counter'>
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <button className='submit'>ถัดไป</button>
        </div>
    );
}

export default OrderPage;