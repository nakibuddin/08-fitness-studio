import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucBQOo7fFNYiYmastrKObuxmA2-QMBwDTlw&usqp=CAU" alt="" />
            <h5>Zahid Hossain</h5>
            <p>Age: 25 yrs</p>
            <p>Height: 6.5</p>
            <p>Weight: 75 kg</p>
        </div>
    );
};

export default Profile;