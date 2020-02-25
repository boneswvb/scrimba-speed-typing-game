import React from 'react'
import useWordGame from './HOOKS/useWordGame'
import'./App.css'

const App = () => {
  const [textAreaRef, 
    handleChange, 
    timeRemaining, 
    startGame, 
    text, 
    isTimeRunning, 
    wordCount] = useWordGame(5)
  
  return(
    <div>
      <h1>How fast can you type?</h1>
      <textarea 
        ref={textAreaRef}
        onChange={handleChange} 
        value={text}
        disabled={!isTimeRunning}
        />
      <h4>Time remaining: {timeRemaining}</h4>
      <button 
        onClick={startGame}
        disabled={isTimeRunning}
        >
         Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  )
}

export default App