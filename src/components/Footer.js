import React from 'react';
import './Footer.css';

const Footer = () => {
  const email = 'juliocas65@gmail.com';
  const handleEmail = (e) => {
    alert(`You will send an email to ${email}`);
  }
  return (
    <>
      <p className='footer'>
        All rights reserved 2023
      </p>
      <span className='email-contact'>
        For any doubts, please contact me at:
        <a
          className="email"
          href={`mailto:${email}`}
          onClick={e => handleEmail()}>
          {email}
        </a>
      </span>
    </>
  );
}

export default Footer;