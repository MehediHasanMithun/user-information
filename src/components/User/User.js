import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const User = (props) => {
    const users = props.user;
    const element = <FontAwesomeIcon icon={faUserPlus} />
   // console.log(users);
   const {name,email,company,phone,salary,img} = users;
    return (
        <div className="user">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="details">
                <h2>Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Company: {company}</p>
                <p>Salary: ${salary}</p>
                <p>Phone: {phone}</p>
                <button onClick={()=>props.handleAddButton(users)}>{element} Add Me</button>
            </div>
        </div>
    );
};

export default User;