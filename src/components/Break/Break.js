import React from 'react';
import './Break.css'

const Break = ({addABreak}) => {
    return (
        <div>
            <h5>Add A Break</h5>

            <div className='break'>
                <button onClick={() => addABreak(10)}>10s</button>
                <button onClick={() => addABreak(20)}>20s</button>                
                <button onClick={() => addABreak(30)}>30s</button>                
                <button onClick={() => addABreak(40)}>40s</button>                
                <button onClick={() => addABreak(50)}>50s</button>                                                
            </div>
        </div>
    );
};

export default Break;