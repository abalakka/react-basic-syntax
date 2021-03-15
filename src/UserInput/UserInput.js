import React from 'react';

const userInput = (props) => {
    const style = {
        border: '3px solid blue',
        padding: '2px',
        margin: '2px'
    }

    return <input style={style} type="text" onChange={props.changed} value={props.original} />;
}

export default userInput;