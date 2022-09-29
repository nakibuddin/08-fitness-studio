import './App.css';
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';
import { useState } from 'react';
import Break from './components/Break/Break';


function App() {
    const [exerciseTimes, setExerciseTimes] = useState(0);
    const [breakTime, setBreakTime] = useState(0);
    const addToList = (time) => setExerciseTimes(exerciseTimes + time) ;    
    const addABreak = (time) => {
        setBreakTime(time);
        localStorage.setItem('time',time);
    } ;

    return (
        <div className="my-container">
            <div className='exercises-container'>
                <h3>Fitness Studio</h3>
                <h4>Select today’s exercise</h4> 
                <Exercises addToList={addToList}></Exercises>
            </div>

            <div className='cart-container'>
                <Profile></Profile>
                <Break addABreak={addABreak}></Break>
                <ExerciseDetails exerciseTimes={exerciseTimes} breakTime={breakTime}></ExerciseDetails>
            </div>
        </div>
    );
}

export default App;
