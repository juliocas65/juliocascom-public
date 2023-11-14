import React from 'react'
import { Message } from '../common/Message'

export const NotFound = () => {
  const title = 'Page Not Fund'
  const content = 'Please check the URL or try again later.'
  return (
    <>
      <Message
        title={title}
        content={content}
      >
      </Message>
    </>
  )
}
