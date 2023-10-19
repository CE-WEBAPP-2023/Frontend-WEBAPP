import './OrderPage.css';
import InputField from '../../components/OrderPage/InputField';
import React, { useState } from "react";

function OrderPage() {

    const [count, setCount] = useState(1);

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        tel: '',
        address: '',
        food: '',
    });

    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    function handleSubmit() {
        console.log(formData);
    }

    return (
        <div className="orderpage">
            <h1>กรอกข้อมูลส่วนตัว</h1>
            <InputField name='fname' title='ชื่อจริง' placeholder='นายสมชาย' value={formData.fname} onChange={handleInputChange} />
            <InputField name='lname' title='นามสกุล' placeholder='ชายสมชื่อ' value={formData.lname} onChange={handleInputChange} />
            <InputField name='tel' title='เบอร์โทร' placeholder='09x-xxx-xxxx' value={formData.tel} onChange={handleInputChange} />
            <InputField name='address' title='ที่อยู่' placeholder='ใต้สะพานลอย' value={formData.address} onChange={handleInputChange} />
            <h1>เมนู</h1>
            <div className='menu'>
                <input name='food' type="text" placeholder="ข้าวแกงนกพิราบ + ไข่แมลงปอ" value={formData.food} onChange={handleInputChange} />
                <div className='counter'>
                    <button onClick={decrement}>-</button>
                    <p>{count}</p>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <button className='submit' onClick={handleSubmit}>ถัดไป</button>
        </div>
    );
}

export default OrderPage;