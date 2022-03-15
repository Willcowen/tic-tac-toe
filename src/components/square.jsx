import React from 'react';
import "../App.css"
function Square(props) {
    const {value, chooseSquare} = props
    return <div className="square" onClick={chooseSquare}>{value}</div>
}

export default Square