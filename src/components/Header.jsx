import React from 'react'
import './Main.css'
import { RiMusicFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";


export default function Header({ theme, handleButtonClick }) {
  return (
    <header>
        <RiMusicFill className='music-icon'/>
        <button className='theme-btn' onClick={handleButtonClick}><FaCircle className={theme==='light' ? 'l-circle' : 'd-circle'} /></button>
    </header>
  )
}
