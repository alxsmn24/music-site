import React, { useState, useEffect } from 'react'
import './Main.css'

export default function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
      let timer;
      if (isRunning) {
          timer = setInterval(() => {
              if (seconds > 0) {
                  setSeconds(seconds - 1);
              } else if (minutes > 0) {
                  setMinutes(minutes - 1);
                  setSeconds(59);
              } else if (hours > 0) {
                  setHours(hours - 1);
                  setMinutes(59);
                  setSeconds(59);
              } else {
                  setIsRunning(false);
                  alert("Таймер завершен!");
              }
          }, 1000);
      }
      return () => clearInterval(timer);
  }, [isRunning, hours, minutes, seconds]);

  const handleStart = () => {
      setIsRunning(true);
  };

  const handleStop = () => {
      setIsRunning(false);
  };

  return (
      <div className='timer'>
          <div className='timer-result'>Оставшееся время: {hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>
          <input className='timer-input' type="number" value={hours} onChange={(e) => setHours(parseInt(e.target.value))} />
          <input className='timer-input' type="number" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))} />
          <input className='timer-input' type="number" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))} />
          {isRunning ? (
              <button className='timer-button' onClick={handleStop}>Стоп</button>
          ) : (
              <button className='timer-button' onClick={handleStart}>Старт</button>
          )}
      </div>
  );
}

