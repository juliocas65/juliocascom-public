import React from 'react';
import './Message.css';

export const Message = ({title, content}) => {
  return (
    <>
      <div className='message-container'>
        <div className='row'>
          <div className='col-2'>
            <i className='bi bi-star'></i>
          </div>
          <div className='col-10'>
            <span className='title'>{title}</span>
            <p className='content'>{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}
