import React, {useState, useEffect} from 'react'
import'./App.css'

const App = () => {

  const STARTING_TIME = 5

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)

  const handleChange = (e) => {
    const {value} = e.target
    setText(value)
  }

  const calculateWordCount = (text) => {
    const wordArr = text.trim().split(" ")
    return wordArr.filter(filteredWords => filteredWords !== "").length
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
  }

  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)      
    }else if (timeRemaining === 0) {
      endGame()
    }
  },[timeRemaining, isTimeRunning])

  return(
    <div>
      <h1>How fast can you type?</h1>
      <textarea 
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






/**
 * Challenge: build the basic structure of our game
 * 
 * 1. <h1> title at the top
 * 2. <textarea> for the box to type in 
 *      (tip: React normalizes <textarea /> to be more like <input />, 
 *      so it can be used as a self-closing element and uses the `value` property
 *      to set its contents)
 * 3. <h4> ti display the amount of time remaining
 * 4. <button> to start the game
 * 5. Another <h1> to display the word count
 */
