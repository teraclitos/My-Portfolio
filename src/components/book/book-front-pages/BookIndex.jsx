import React from 'react'
import LinkToMail from './LinkToMail'

const BookIndex = ({ item, functionChangePageForward, positionOfTheIndexOfTheBook, setPositionPage, index }) => {
  return (
    <li>
      {index === 2
        ? (
          <LinkToMail item={item} />
          )
        : (
          <button
            type='button'
            className='mb-2 proyects letter-title-book no-button-styles'
            onTouchStart={(e) => {
              e.stopPropagation()
            }}
            onClick={(e) => {
              e.stopPropagation()
              if (index === 0) {
                functionChangePageForward(4, positionOfTheIndexOfTheBook)
                setPositionPage(3)
              } else if (index === 1) {
                functionChangePageForward(2, positionOfTheIndexOfTheBook)
                setPositionPage(2)
              }
            }}
          >
            {item.title}
          </button>
          )}
    </li>
  )
}

export default BookIndex
