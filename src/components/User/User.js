import React, { useState } from "react";


const User = ({name, location}) => {

    let [count, setCount] = useState(0);

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                setCount(count++)
            }}>Increase Count</button>
            <h2>Name: {name}</h2>
            <p>Location: {location}</p>
            <p>Username: @_giriraj_soni</p>
        </div>
    )
}

export default User