import React from 'react';
import './Footer.css';

const Footer = () => {
  let email = 'juliocas65@gmail.com';
  return (
    <>
      <p className='footer'>
        All rights reserved 2023
      </p>
      <span className='email-contact'>
        For any doubts, please contact me at:
        <a className="email" href={`mailto:${email}`}>
          {email}
        </a>
      </span>
    </>
  );
}

export default Footer;