import { useState } from "react";
const User = (props) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div className="usercard"> 
            <h1>Count = {count}</h1>
            <h1>Count2 = {count2}</h1>
            <h1>Name: {props.name}</h1>
            <h3>Location: Bangalore</h3>
            <h3>Contact: xyzabc@gmail.com</h3>
        </div>
    )
};

export default User;