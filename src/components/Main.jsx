import React, { useState } from 'react'
import Header from './Header'
import './Main.css'
import Sounds from './Sounds'
import Timer from './Timer'


export default function Background() {
    const [theme, setTheme] = useState('light')

    const handleButtonClick = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const [activeCard, setActiveCard] = useState('Sounds')

    const chooseSounds = () => {
      setActiveCard('Sounds')
    }

    const chooseTimer = () => {
      setActiveCard('Timer')
    }

  return (
    <div className={theme === 'light' ? 'light' : 'dark'}>
        <Header theme={theme} handleButtonClick={handleButtonClick}/>
        <div className='settings'>
          <div className='settings-card'>
            <div className='settings-pick'>
              <button onClick={chooseSounds} className={ activeCard==='Sounds' ? 'btn-sounds active' : 'btn-sounds'}>Sounds</button>
              <button onClick={chooseTimer} className={ activeCard==='Timer' ? 'btn-timer active' : 'btn-timer'}>Timer</button>
            </div>
            <div className='main-card'>
                <div className={activeCard==='Sounds' ? 'soundscard-actve' : 'sounds-card'}><Sounds /></div>
                <div className={activeCard==='Timer' ? 'timercard-actve' : 'timer-card'}><Timer /></div>
            </div>
          </div>
        </div>
    </div>
  )
}
