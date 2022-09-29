import React from 'react';
import './ExerciseDetails.css'

const ExerciseDetails = (props) => {
    return (
        <div className='exercise-details'>
            <h5>Exercise Details</h5>

            <div>
                <h6>Exercise time</h6>
                <p>{props.exerciseTimes} secondes</p>
            </div>            

            <div>
                <h6>Break time</h6>
                <p>{props.breakTime} secondes</p>
            </div>            

            <button >Activity Completed</button>
        </div>
    );
};

export default ExerciseDetails;