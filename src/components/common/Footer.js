import React from 'react';
import './Footer.css';

const Footer = () => {
  const email = 'juliocas65@gmail.com';
  const handleEmail = (e) => {
    alert(`You will send an email to ${email}`);
  }
  return (
    <>
    <div className='mt-3'>
      <p className='footer'>
        All rights reserved 2023
      </p>
      <p className='email-contact'>
        For any doubts, please contact me at:
        <a
          className="email"
          href={`mailto:${email}`}
          onClick={e => handleEmail()}>
          {email}
        </a>
      </p>
    </div>

    </>
  );
}

export default Footer;