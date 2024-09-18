import React from 'react'

const BookAboutMe = ({ page, downloadCV }) => {
  return (
    <div className='d-flex flex-column align-items-center '>
      <h2 className='title-size letter-title-book'>
        {page.title}
      </h2>
      <img className='img-me mt-3' src={page.url} alt='me' />
      <button
        type='button'
        className='wooden-button wooden-button-cv mt-3
   letter-title-book'
        onClick={(e) => {
          e.stopPropagation()
          downloadCV()
        }}
        onTouchStart={(e) => {
          e.stopPropagation()
        }}
      >
        CV
      </button>
    </div>

  )
}

export default BookAboutMe
