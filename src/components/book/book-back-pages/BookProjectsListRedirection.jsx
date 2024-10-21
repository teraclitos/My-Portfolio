import React from 'react'

const BookProjectsListRedirection = ({ i, language, functionChangePageBackward, setPositionPage }) => {
  return (
    <button
      type='button'
      onClick={(e) => {
        e.stopPropagation()
        functionChangePageBackward(i - 3, i)
        setPositionPage(4)
      }}
      className='back-to-proyects  letter-title-book no-button-styles'
    >
      {language === 'spanish' ? 'Proyectos' : 'Projects'}
    </button>
  )
}

export default BookProjectsListRedirection
