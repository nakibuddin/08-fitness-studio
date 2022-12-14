import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {   
    let breakTime = props.breakTime; 
    if(breakTime === 0) {
        breakTime = localStorage.getItem('time');
    }
    
    return (
        <div className='exercise-details'>
            <h5>Exercise Details</h5>

            <div>
                <h6>Exercise time</h6>
                <p>{props.exerciseTimes} secondes</p>
            </div>            

            <div>
                <h6>Break time</h6>                
                <p>{breakTime} secondes</p>
            </div>                        
        </div>
    );
};

export default ExerciseDetails;