import React from 'react'

const BookIndexRedirection = ({
  pointerEvent,
  functionChangePageBackward,
  setPositionPage,
  language,
  i
}) => {
  return (
    <button
      type='button'
      style={{ pointerEvents: pointerEvent }}
      className='back-to-index letter-title-book no-button-styles'
      onClick={(e) => {
        e.stopPropagation()
        functionChangePageBackward(i - 1, i)
        setPositionPage(2)
      }}

    >
      {language === 'spanish' ? 'Índice' : 'Index'}
    </button>

  )
}

export default BookIndexRedirection
