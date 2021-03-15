import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My username is {props.userName}</p>
            <p>Random stuff</p>
        </div>
    );
}

export default userOutput;