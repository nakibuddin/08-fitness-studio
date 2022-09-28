import './App.css';
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails';
import Exercises from './components/Exercises/Exercises';
import Profile from './components/Profile/Profile';


function App() {

    return (
        <div className="my-container">
            <div className='exercises-container'>
                <h3>Fitness Studio</h3>
                <h4>Select today’s exercise</h4> 
                <Exercises></Exercises>
            </div>

            <div className='cart-container'>
                <Profile></Profile>
                <ExerciseDetails></ExerciseDetails>
            </div>
        </div>
    );
}

export default App;
