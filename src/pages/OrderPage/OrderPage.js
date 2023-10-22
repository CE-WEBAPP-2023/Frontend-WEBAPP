import './OrderPage.css';
import InputField from '../../components/OrderPage/InputField';
import React, { useState } from "react";
import { APIURL } from '../../config';
import axios from "axios"


function OrderPage() {
    const [count, setCount] = useState(1);
    const [menuName, setMenuName] = useState(''); // State to store the menu name
    const [orders, setOrders] = useState([]);
    const [formValue, setFormValue] = useState({
        fname: '',
        lname: '',
        tel: '',
        address: '',
    })

    const {fname,lname,tel,address} = formValue

    function handleSetForm(label, event) {
        setFormValue({
            ...formValue,
            [label]: event.target.value
        })
    }

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
            name: menuName,
            quantity: count,
            price: 1000
        };

        if (newOrder.name === '' || newOrder.quantity === '') {
            return alert('โปรดกรอกเมนูให้ครบถ้วน');
        }

        setOrders([...orders, newOrder]);

        setCount(1);
        setMenuName('');
    }

    function handleSubmit() {
        console.log("hello chatree")
        console.log(JSON.stringify(formValue,null,2))
        console.log(orders)
        console.log(`${APIURL}/Order/post`);
        axios.post(`${APIURL}/Order/post`,{
            user: {
                name: fname,
                lastName: lname,
                phoneNumber: tel
            },
            userLocation: address,
            canteen: {
                canteenId: 4,
                canteenName: "โรง c"
            },
            food: orders
        }).then((respose)=>{
            console.log(respose)
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="orderpage">
            <div className='box'>
                <div className='inputbox'>
                    <div className='inputbox'>
                        <h1>กรอกข้อมูลส่วนตัว</h1>
                        <div className='personinputbox'>
                            <div className='input-field'>
                                <label>ชื่อ</label>
                                <input onChange={(e)=>handleSetForm("fname",e)} value={fname} type="text" placeholder="fname" />
                            </div>
                            <div className='input-field'>
                                <label>นามสกุล</label>
                                <input onChange={(e)=>handleSetForm("lname",e)} value={lname} type="text" placeholder="lname" />
                            </div>
                            <div className='input-field'>
                                <label>เบอร์โทร</label>
                                <input onChange={(e)=>handleSetForm("tel",e)} value={tel} type="text" placeholder="tel" />
                            </div>
                            <div className='input-field'>
                                <label>ที่อยู่</label>
                                <input onChange={(e)=>handleSetForm("address",e)} value={address} type="text" placeholder="address" />
                            </div>
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
                                <p>{order.name}</p>
                            </div>
                            <div className='ordercount'>
                                <p>x {order.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className='submit' onClick={handleSubmit}>ถัดไป</button>
            </div>
        </div>
    );
}

export default OrderPage;