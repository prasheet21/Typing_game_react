import React from 'react';
import './style/TopPanel.css';

const TopPanel = ({ total, cpm, time , mistakes }) => {
    return (
        <div className='main-container'>
            <div>
                {/* Here it is  */}
                {/* I think the error is here only ok let me check show me the error screen kay */}
            <p>{mistakes}</p>
                <span>{cpm}/{total}</span>
                <span>Typed characters<span className='full-name'> (out of Total)</span></span>
            </div>
            <div>
                <span>{time}</span>
                <span>Time</span>
            </div>

        </div>
    );
}

export default TopPanel;