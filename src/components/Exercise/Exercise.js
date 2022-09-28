import React from 'react';
import './Exercise.css'

const Exercise = (props) => {        
    const {img, name, age, time} = props.exercise;
    return (
        <div className='exercise'>    
            <img src={img} alt="" />
            <h5>{name}</h5>
            <p>For Age: {age}</p>
            <p>Time required: {time}s</p>
            <button>Add to list</button>
        </div>
    );
};

export default Exercise;