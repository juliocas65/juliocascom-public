import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/juliocascom-com.png';
import './Header.css';

export const Header = () => {
  return (
    <div className="row">
      <div className='centered col-12 col-md-4'>
        <div className="row">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </div>
      <div className='centered col-12 col-md-8'>
        <div className="row">
          <div className='col header-link'>
            <NavLink to='/'
              className="link">
              <span> Home </span>
            </NavLink>
          </div>
          <div className='col header-link'>
            <NavLink
              to='/articles'
              className="link">
              <span> Articles </span>
            </NavLink>
          </div>
          <div className='col header-link'>
            <NavLink
              to='/social-media'
              className="link">
              <span> Contact </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
