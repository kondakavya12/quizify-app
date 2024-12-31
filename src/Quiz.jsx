import React, {useState} from 'react';
import Question from './Question';
import QuizScore from './QuizScore';
import StartButton from './StartButton';
import RestartButton from './RestartButton';
import Timer from './Timer';

function Quiz(){
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    const questions = [
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "HighText Markup Language", "HighText Markup Language", "HyperTool Markup Language"],
            answer: "HyperText Markup Language",
        },
        {
            question: "Which CSS property is used to change the text color?",
            options: ["font-color", "color", "text-color", "background-color"],
            answer: "color",
        },
        {
            question: "What is the default display property of a <div> in CSS?",
            options: ["inline", "inline-block", "block", "flex"],
            answer: "block",
        },
        {
            question: "Which of the following is used to create a state in React?",
            options: ["this.state", "useState()", "createState()", "stateVariable()"],
            answer: "useState()",
        },
        {
            question: "Which of the following is the correct way to add a comment in ReactJS?",
            options: ["<!-- This is a comment -->", "{/* This is a comment */}", "// This is a comment", "/* This is a comment */"],
            answer: "{/* This is a comment */}",
        },
        {
            question: "Which HTML element is used to specify a footer for a document or section?",
            options: ["<section>", "<bottom>", "<div>", "<footer>"],
            answer: "<footer>",
        },
        {
            question: "What is the correct HTML element to link an external JavaScript file?",
            options: ["<js>", "<link>", "<script src='filename.js'>", "<external-script>"],
            answer: "<script src='filename.js'>",
        },
        {
            question: "Which of the following methods is used to apply inline CSS styles in React?",
            options: ["style={color: 'red'}", "style='color:red'", "style='color:red'", "style={color = 'red'}"],
            answer: "style={color: 'red'}",
        },
        {
            question: "Which of the following CSS selectors is used to select all <p> elements inside a <div>?",
            options: ["div > p", "div p", "p div", "div+p"],
            answer: "div p",
        },
        {
            question: "What does the z-index property in CSS control?",
            options: ["Font size", "The position of an element", "Layer stacking order of elements", "Image opacity"],
            answer: "Layer stacking order of elements",
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            options: ["<ol>", "<li>", "<list>", "<ul>"],
            answer: "<ul>",
        },
        {
            question: "Which of the following is the correct way to import a CSS file into a React component?",
            options: ["import './style.css';", "require('./style.css');", "@import './style.css';", "link './style.css';"],
            answer: "import './style.css';",
        },
        {
            question: "How do you pass data to a child component in React?",
            options: ["Using state", "Using an event handler", "Using methods", "Using props"],
            answer: "Using props",
        },
        {
            question: "Which HTML attribute is used to specify the image source?",
            options: ["src", "href", "alt", "srcset"],
            answer: "src",
        },
        {
            question: "Which CSS property is used to change the font of text?",
            options: ["font-weight", "font-style", "font-family", "text-style"],
            answer: "font-family",
        },
    ];

    // Shuffle function using sort
    function shuffleArray(questions){
        return questions.sort(() => Math.random() - 0.5);
    }

    function handleAnswer(selectedOption){
        if (selectedOption === shuffledQuestions[currentQuestionIndex].answer){
            setScore(score + 1);
        }
    
        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < shuffledQuestions.length){
            setCurrentQuestionIndex(nextIndex);
        } 
        else{
            setShowResult(true);
        }
    }

    const [quizStarted, setQuizStarted] = useState(false);

    function startQuiz(){
        setShuffledQuestions(shuffleArray(questions));
        setQuizStarted(true); // Start the quiz
        setTimeLeft(time); 
    }

    function restartQuiz(){
        setShuffledQuestions(shuffleArray(questions));
        setCurrentQuestionIndex(0); 
        setScore(0); // Reset the score
        setShowResult(false); // Hide the result
        setTimeLeft(time); // Reset the timer
        setQuizStarted(true); // Keep the quiz started without going to the start button
    }

    const time = 150; //test duration: 150 secs
    const [timeLeft, setTimeLeft] = useState(time); 

    function handleTimeUp(remainingTime){
        setTimeLeft(remainingTime); // Update the remaining time
        if (remainingTime == 0){
            setShowResult(true); // Show result when time is up
        }
    }

    return(

        <div className="quiz-container">
            {
                !quizStarted ? ( <StartButton onStart={startQuiz} /> ) : 
                showResult ? (
                    <div>
                        <QuizScore score={score} total={shuffledQuestions.length} />
                        <RestartButton onRestart={restartQuiz} />
                    </div>
                ) : (
                        <div>
                            <Timer timeLeft={timeLeft} onTimeUp={handleTimeUp} />
                            <Question
                                questionData={shuffledQuestions[currentQuestionIndex]}
                                onAnswer={handleAnswer}
                                questionNumber={currentQuestionIndex + 1}
                                totalQuestions={shuffledQuestions.length}
                            />
                        </div>
                )
            }
        </div>
    );
}

export default Quiz;
