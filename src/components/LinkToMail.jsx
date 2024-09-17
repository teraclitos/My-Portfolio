import React from 'react'

const LinkToMail = ({ element }) => {
  return (

    <a
      onClick={(e) => {
        e.stopPropagation()
      }}
      onTouchStart={(e) => {
        e.stopPropagation()
      }}
      className='mb-2 proyects letter-title-book contact-link '
      href='mailto:tefans12@gmail.com'
    >
      {element.title}
    </a>

  )
}
export default LinkToMail
