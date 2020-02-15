import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [startTimer, setStartTimer] = useState(false)

  const handleChange = (e) => {
      const {value} = e.target
      setText(value)
    }

  const wordCount = (text) => {
    const words =  text.trim().split(" ")
    return words.filter(filteredWords => filteredWords !== "").length
  }

  const handleStart = () => {
    return(
      setStartTimer(true)
    )
  }
  
  useEffect(() => {
    if(timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }
  }, [timeRemaining])
  
   return (
    <div>

      <h1>How fast do you type?</h1>

      <textarea 
          name="data" 
          value={text.data}
          onChange={handleChange}  />

      <h4>Time remaining: {timeRemaining}</h4>

      <button 
        onClick={() => console.log(wordCount(text))}>Start
      </button>

      <h1>Word count: ???</h1>

    </div>
  );
}

export default App;

