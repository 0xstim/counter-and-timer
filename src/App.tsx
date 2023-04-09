import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  const handleStart = (): void => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setTime(prevTime => prevTime + 10); // add 10ms instead of 1s
    }, 10); // set interval to 10ms instead of 1000ms
  };

  const handlePause = (): void => {
    setIsRunning(false);
    clearInterval(intervalRef.current!);
  };

  const handleReset = (): void => {
    setIsRunning(false);
    clearInterval(intervalRef.current!);
    setTime(0);
  };

  const formatTime = (time: number): string => {
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
        <div className="count">{count}</div>
        <button onClick={() => setCount((count) => count + 1)}>
          Count
        </button>
      </div>
      <button onClick={handleResetCount}>Reset Count</button>
    </div>
  )
}

export default App
