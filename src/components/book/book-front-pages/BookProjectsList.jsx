import React from 'react'

const BookProjectsList = ({ project, positionOfTheListOfProyects, setPositionPage, functionChangePageForward }) => {
  return (
    <li>
      <button
        type='button'
        onTouchStart={(e) => {
          e.stopPropagation()
        }}
        onClick={(e) => {
          e.stopPropagation()
          functionChangePageForward((project.numberOfTranslationsToMake), positionOfTheListOfProyects)
          setPositionPage(project.positionFrontPage)
        }}
        className='mb-2 proyects  letter-title-book no-button-styles '
      >
        {project.projectName}
      </button>
    </li>
  )
}

export default BookProjectsList
