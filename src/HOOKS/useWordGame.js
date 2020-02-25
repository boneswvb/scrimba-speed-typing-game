import {useState, useEffect, useRef} from 'react'

const useWordGame = (startingTime = 10) => {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textAreaRef = useRef(null)

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
    setTimeRemaining(startingTime)
    setText("")
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
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

  return [textAreaRef, handleChange, timeRemaining, startGame, text, isTimeRunning, wordCount]
}

export default useWordGame