import React from 'react'

const BookProjectDescription = ({ page }) => {
  return (
    <div>
      <div>
        <p className='letter-body-size text-description'>
          {page.descriptionProject}
        </p>
      </div>
      <div className='number-page'>{page.number}</div>
    </div>

  )
}

export default BookProjectDescription
