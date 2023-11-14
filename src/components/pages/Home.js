import React from 'react'
import './Home.css';
import Sections from '../domain/Sections';
import { Contact } from '../domain/Contact';
import logo from '../../assets/images/juliocascom.png';

export const Home = () => {
  const sections = [
    {
      name: '🎓 My Experience',
      link: '/experience',
    },
    {
      name: '✏️ My Articles',
      link: '/articles',
    },
    {
      name: '📲 My Social Media',
      link: '/social-media',
    }
  ];
  return (
    <div className="">
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div class="wave wave-top px-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-19.75,153.46 C550.79,170.23 -15.80,148.52 549.09,171.22 L500.00,150.00 L-21.44,46.88 Z"></path>
        </svg>
      </div>
      <div className='section1'>
        <p className='title'>
          🚧 <strong>juliocas.com</strong> is under construction.
        </p>
        <Sections
          sections={sections}
        ></Sections>
      </div>
      <div class="wave px-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none">
          <path d="M-35.55,-26.14 C544.58,-16.27 -34.99,-26.14 545.14,-18.24 L512.98,99.18 L-37.81,12.34 Z"></path>
        </svg>
      </div>
      <div className='centered mb-4'>
        <Contact></Contact>
      </div>
    </div>
    </div>
  )
}
