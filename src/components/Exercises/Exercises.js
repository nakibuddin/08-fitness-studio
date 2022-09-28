import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import './Exercises.css'

const Exercises = () => {
    const [exercises, setExercises] = useState([]);    
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setExercises(data))
        .catch(error => console.log(error));
    } ,[])

    return (
        <div className='exercises'>
            {
                exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise}></Exercise>)
            }            
        </div>
    );
};

export default Exercises;