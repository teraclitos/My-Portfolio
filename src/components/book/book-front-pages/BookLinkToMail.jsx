import React from 'react'

const BookLinkToMail = ({ item }) => {
  return (

    <a
      onClick={(e) => {
        e.stopPropagation()
      }}
      onTouchStart={(e) => {
        e.stopPropagation()
      }}
      className='mb-2  projects letter-title-book contact-link '
      href='mailto:tefans12@gmail.com'
    >
      {item.title}
    </a>

  )
}
export default BookLinkToMail
