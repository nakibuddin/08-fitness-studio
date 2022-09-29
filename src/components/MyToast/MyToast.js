import React from 'react';
import './MyToast.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyToast = () => {
    const notify = () => {
        // toast("Wow so easy!");
        toast('Congratulation you have done it', {position: toast.POSITION.TOP_CENTER})
    };

    return (
        <div className='my-toast'>
            <button onClick={notify}>Activity Completed</button>  
            <ToastContainer/>          
        </div>
    );
};

export default MyToast;