import React from 'react';

function RestartButton({onRestart}){

    return(
        <button onClick={onRestart} className="restart-button">
            Restart
        </button>
    );
}

export default RestartButton;
