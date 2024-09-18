import React from 'react'

const BookInnerCover = ({ page }) => {
  return (
    <div className='book-title-container '>
      <h5 className='text-center mt-3 sub-title-size letter-book-title'>
        <i>{page.subtitle}</i>
      </h5>
      <h2 className='text-center old-letter red mt-3 title-size'>
        {page.title}
      </h2>
    </div>

  )
}

export default BookInnerCover
