import React from 'react';

function QuizScore({ score, total }){

    return(

        <div className="result">
            <h2>🥳!...Quiz Completed Successfully...!🥳</h2>
            <p id='score'>Score: {score} / {total}</p>
            <p id='remarks'>{score === total ? "Congrats, Excellent work!" : "Try again for a perfect score!"}</p>
        </div>
    );
}

export default QuizScore;
