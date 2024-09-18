import React from 'react'

const BookCover = ({ page }) => {
  return (
    <div className='portada-container d-flex flex-column justify-content-center align-items-center'>
      <div className='title-book-container'>
        <h2 className='golden text-center old-letter first-title-tape'>
          {page.tapeBookTitleFirst}
        </h2>
        <h2 className='golden  old-letter second-title-tape'>
          {page.tapeBookTitleSecond}
        </h2>
      </div>
      <img
        className='img-logo-libro'
        src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1685995705/logo-fondo-librorojo_qplqze.png'
        alt='logo-libro'
      />
    </div>

  )
}

export default BookCover
