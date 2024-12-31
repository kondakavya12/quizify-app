import Quiz from './Quiz';

function App() {

  return(
    
    <>
      <div>
        <header className="title-container">
          <h1 className="heading">QUIZIFY</h1>
          <p className='subheading'>Real-Time Knowledge Tester</p>
        </header>
        <Quiz />
      </div>
      <footer className='footer-element'>
        <p>&copy; Quizify Application 2024</p>
      </footer>
    </>
  );
}

export default App
