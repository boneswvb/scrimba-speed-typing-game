import React, {useState} from 'react';
import './App.css';

function App() {

  const [text, setText] = useState("")
  const [timer, setTimer] = useState(25)

  const handleChange = (e) => {
      const {value} = e.target
      setText(value)
    }

  const wordCount = (text) => {
    const words =  text.trim().split(" ")
    return words.filter(filteredWords => filteredWords !== "").length
  }
  
   return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea 
          name="data" 
          value={text.data}
          onChange={handleChange}  />
      <h4>Time remaining: {timer}</h4>
      <button onClick={() => console.log(wordCount(text))}>Start</button>
      <h1>Word count: ???</h1>
    </div>
  );
}

export default App;

