import React from 'react'
import './Home.css';
import Sections from '../domain/Sections';
import { Contact } from '../domain/Contact';

export const Home = () => {
  const sections = [
    '🎓 My Experience',
    '✏️ My Articles',
    '📲 My Social Media'
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>
          🚧 <strong>juliocas.com</strong> is under construction now using React.
        </p>
        <Sections
          sections={sections}
        ></Sections>
        <Contact></Contact>
      </header>
    </div>
  )
}
