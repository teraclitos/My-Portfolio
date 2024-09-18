import React from 'react'

const BookProyect = ({ proyect, positionOfTheListOfProyects, setPositionPage, functionChangePageForward, index }) => {
  return (
    <li>
      <button
        type='button'
        onTouchStart={(e) => {
          e.stopPropagation()
        }}
        onClick={(e) => {
          e.stopPropagation()
          functionChangePageForward((index + 1) * 2, positionOfTheListOfProyects)
          setPositionPage(index + 4)
        }}
        className='mb-2 proyects  letter-title-book no-button-styles '
      >
        {proyect.proyect}
      </button>
    </li>
  )
}

export default BookProyect
