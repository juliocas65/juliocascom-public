import React from 'react'
import { Message } from '../common/Message'

export const Articles = () => {
  const title = 'Under construction'
  const content = 'This section is under construction, we`ll have news for you pretty soon.'
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
