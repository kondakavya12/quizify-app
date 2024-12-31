import React, { useEffect, useState } from 'react';

function Timer({ timeLeft, onTimeUp }){

    useEffect(() => {
        if (timeLeft === 0){
            onTimeUp(); // Trigger onTimeUp when the timer reaches 0
            return;
        }
    
        const timerInterval = setInterval(() => {
            if (timeLeft > 0){
                onTimeUp(timeLeft - 1); // Call onTimeUp to update the remaining time
            }
        }, 1000);
    
        return () => clearInterval(timerInterval); // Cleanup the interval on component unmount
    }, [timeLeft, onTimeUp]);
    
    return (
        <div className="timer-container">
            Time Left: {timeLeft}s
        </div>
    );
}

export default Timer;
