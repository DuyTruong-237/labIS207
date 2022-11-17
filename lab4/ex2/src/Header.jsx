import React from 'react'
import Personicon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import './header.css'
import logo from "./logo.svg"

export default function  
Header() {
  return (
    <div className='header' >
        <IconButton>
            <Personicon fontSize='large' className='header_icon'/>
        </IconButton>
        <img className='header_logo'src="./logo192.png" alt="header"/>
        <IconButton>
            <ForumIcon fontSize='large' className='header_icon'/>
        </IconButton>
    </div>
  )
}
