import React from 'react'
import BookLinkToMail from './BookLinkToMail'

const BookIndex = ({ item, functionChangePageForward, positionOfTheIndexOfTheBook, setPositionPage, index }) => {
  return (
    <li>
      {index === 2
        ? (
          <BookLinkToMail item={item} />
          )
        : (
          <button
            type='button'
            className='mb-2  projects letter-title-book no-button-styles'
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
            onClick={(e) => {
              e.stopPropagation()
              functionChangePageForward(item.numberOfTranslationsToMake, positionOfTheIndexOfTheBook)
              setPositionPage(item.positionOfTheFrontPage)
            }}
          >
            {item.title}
          </button>
          )}
    </li>
  )
}

export default BookIndex
