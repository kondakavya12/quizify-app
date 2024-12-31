import React from 'react';

function Question({ questionData, onAnswer, questionNumber, totalQuestions }){ //props

    return(

        <div id="question-container">
            <h2>
                Question {questionNumber} of {totalQuestions}
            </h2>
            <p id="question">{questionData.question}</p>
            <div id="answer-button" class="btn-grid">
                {
                    questionData.options.map((option, index) => (
                    <button key={index} onClick={() => onAnswer(option)}> 
                        {option} 
                    </button>
                    ))
                }
            </div>
        </div>
    );
}

export default Question;
