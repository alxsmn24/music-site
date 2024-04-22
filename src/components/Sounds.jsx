import React from 'react'
import './Main.css'
import { useState } from 'react';

import { GiPersonInBed } from "react-icons/gi";
import { FiCoffee } from "react-icons/fi";
import { PiGuitar } from "react-icons/pi";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeXmark } from "react-icons/fa6";

export default function Sounds() {
  const [mood, setMood] = useState('Sleep')

  const chooseSleep = () => {
    setMood('Sleep')
  }
  const chooseJazz = () => {
    setMood('Jazz')
  }
  const chooseChill = () => {
    setMood('Chill')
  }


  const [volumeBars, setVolumeBars] = useState([0, 0, 0, 0])


  const handleVolumeChange = (index, value) => {
    const newVolumeBars = [...volumeBars]
    newVolumeBars[index] = value
    setVolumeBars(newVolumeBars)
  }

  return (
    <div className='sounds'>
      <div className='mood'>
        <div className='volume-slide'>
          <FaVolumeXmark />
          <input type='range' min='0' max='100' value={volumeBars[0]} onChange={(e) => handleVolumeChange(0, parseInt(e.target.value))}/>
          <FaVolumeHigh />
        </div>
        <h2>Mood</h2>
        <button onClick={chooseSleep} className={mood === 'Sleep' ? 'active' : undefined}><GiPersonInBed /></button>
        <button onClick={chooseJazz} className={mood === 'Jazz' ?'active' : undefined}><PiGuitar /></button>
        <button onClick={chooseChill} className={mood === 'Chill' ? 'active' : undefined}><FiCoffee /></button>
      </div>
      <div className='background-sounds'>
        <h3>Background sounds</h3>
        <div className='background-settings'>
          <div className='background'>
        {volumeBars.slice(1).map((volume, index) => (
            <div key={index} className='background-volume'>
              <input type='range' min='0' max='100' value={volume} onChange={(e) => handleVolumeChange(index + 1, parseInt(e.target.value))} />
            </div>
          ))}
          </div>
          <div className='background'>
            <p>Rain</p>
            <p>Fireplace</p>
            <p>City traffic</p>
          </div>
        </div>
      </div>
    </div>
  )
}
