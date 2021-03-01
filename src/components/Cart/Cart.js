import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const users = props.user;
    console.log(users);
    const totalSalary=users.reduce((totalSalary,user)=> totalSalary + user.salary, 0);
    return (
        <div className="cart">
            <h3><u>User Salary</u></h3>
            <table>
                <tr>
                    <td>Total User Added: </td>
                    <td>{users.length}</td>
                </tr>
                <tr>
                    <td>Total Salary: </td>
                    <td>{totalSalary}</td>
                </tr>
            </table>
        </div>
    );
};

export default Cart;