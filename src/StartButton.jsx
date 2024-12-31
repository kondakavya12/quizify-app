import React from 'react';

function StartButton({onStart}){

    return(
        <button onClick={onStart} className="start-button">
            Ready!
        </button>
    );
}

export default StartButton
