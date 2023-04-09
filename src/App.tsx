import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // create a timer that i can set and reset
  // create a timer that i can pause and resume
  // create a timer that i can set and reset
  // create a timer that i can pause and resume
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10); // add 10ms instead of 1s
    }, 10); // set interval to 10ms instead of 1000ms
  };

  const handlePause = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
    setTime(0);
  };

  const formatTime = (time) => {
    const milliseconds = `0${time % 1000}`.slice(-3); // get last 3 digits of time
    const seconds = `0${Math.floor(time / 1000) % 60}`.slice(-2); // calculate seconds
    const minutes = `0${Math.floor(time / 60000)}`.slice(-2); // calculate minutes
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const handleResetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter + Timer</h1>
      <div className="timer">{formatTime(time)}</div>
      <div className="timer-control">
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handlePause}>Pause</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count
        </button>
        <div className="count">{count}</div>
      </div>
      <button onClick={handleResetCount}>Reset Count</button>
    </div>
  )
}

export default App
