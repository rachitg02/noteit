import React from 'react'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillGithub} from "react-icons/ai"

const Header = () => {
  return (
    <div className='header'>
      <h1 className='headicon'>NoteIt</h1>
      <div>
      <a href="https://twitter.com/rachittwt">{<AiFillTwitterCircle size='2.5em'/>}</a>
      <a href="https://www.linkedin.com/in/rachitgupta2001"><AiFillLinkedin size='2.5em'/></a>
      <a href="https://github.com/rachitg02"><AiFillGithub size='2.5em'/></a>
      </div>
    </div>
  )
}

export default Header
