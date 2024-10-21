import React from 'react'
import BookProjectDescription from './BookProjectDescription'
import BookCover from './BookCover'
import BookInnerCover from './BookInnerCover'
import BookIndex from './BookIndex'
import BookProjectsList from './BookProjectsList'

const BookFrontPages = ({
  onePageRight,
  isMobile,
  i,
  pointerEvent,
  page,
  functionChangePageForward,
  paddingTopDisplay,
  positionOfIndexOfTheBookAndListOfProyects,
  positionOfTheIndexOfTheBook,
  positionOfTheListOfProyects,
  indexOfTheBook,
  allProjects,
  setPositionPage
}) => {
  return (
    <div
      onClick={(e) => {
        onePageRight(i)
      }}
      className={i === 0 ? 'face-front portada' : 'face-front'}
      style={{ pointerEvents: pointerEvent }}
    >
      {i === 0 && (
        <BookCover page={page} />
      )}
      <div className={paddingTopDisplay(i) ? 'pt-0' : 'pt-3'}>
        {i === 1 && (
          <BookInnerCover page={page} />
        )}
        {positionOfIndexOfTheBookAndListOfProyects.includes(i) && (
          <div>
            <b>
              <h2 className='letter-title-book title-size text-center mb-3'>
                {page.title}
              </h2>
            </b>
            <ul className='list-style-none p-0 d-flex flex-column align-items-center   '>
              {i === positionOfTheIndexOfTheBook &&
            indexOfTheBook.map((item, index) => (
              <BookIndex
                key={item.id}
                item={item}
                index={index}
                setPositionPage={setPositionPage}
                functionChangePageForward={functionChangePageForward}
                positionOfTheIndexOfTheBook={positionOfTheIndexOfTheBook}
              />
            ))}
              {i === positionOfTheListOfProyects &&
             allProjects.map(project => (
               <BookProjectsList
                 key={project.id}
                 project={project}
                 setPositionPage={setPositionPage}
                 functionChangePageForward={functionChangePageForward}
                 positionOfTheListOfProyects={positionOfTheListOfProyects}
               />
             ))}
            </ul>
          </div>
        )}
        <BookProjectDescription page={page} />
      </div>
    </div>

  )
}

export default BookFrontPages
