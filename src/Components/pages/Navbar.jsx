import React from 'react'
import logo from '../Assets/storyspacelogo.png';
import '../Styles/_navbar.scss';
import { Outlet } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <div className='navbar_container'>
          <div className='left_btn'>
            <button>Partnership</button>
          </div>
          <div className='middle_logo'>
            <a href="/"><img src={logo} /></a>
          </div>
          <div className='gaps_btns'>
            <button>Subscribe now</button>
            <button className='btn_active'>Talk to expert</button>
          </div>
        </div>

        <Outlet />
    </>
  )
}
