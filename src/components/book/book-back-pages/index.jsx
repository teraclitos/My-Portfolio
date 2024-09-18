import React from 'react'
import BookAboutMe from './BookAboutMe'
import BookProjectLinksAndTitle from './BookProjectLinksAndTitle'
import BookIndexRedirection from './BookIndexRedirection'
import BookProjectsListRedirection from './BookProjectsListRedirection'

const BookBackPages = ({
  onePageLeft,
  isMobile,
  dataBook,
  pointerEvent,
  i,
  page,
  downloadCV,
  projectDisplay,
  indexProyects,
  functionChangePageBackward,
  setPositionPage,
  language
}) => {
  return (
    <div
      onTouchStart={(e) => {
        onePageLeft(i)
      }}
      onClick={(e) => {
        if (!isMobile) {
          onePageLeft(i)
        }
      }}
      className={
     i === dataBook.length - 1
       ? 'face-back portada-back '
       : 'face-back '
   }
      style={{ pointerEvents: pointerEvent }}
    >
      <div className='pt-3'>
        {i === 2 && (
          <BookAboutMe
            page={page}
            downloadCV={downloadCV}
          />
        )}
        {projectDisplay(i) && (
          <BookProjectLinksAndTitle page={page} />
        )}
        <div className=' d-flex  container-bottom'>
          {indexProyects(i, 1) && (

            <BookIndexRedirection
              pointerEvent={pointerEvent}
              functionChangePageBackward={functionChangePageBackward}
              setPositionPage={setPositionPage}
              language={language}
              i={i}
            />

          )}
          {indexProyects(i, 3) && (
            <BookProjectsListRedirection
              functionChangePageBackward={functionChangePageBackward}
              setPositionPage={setPositionPage}
              language={language}
              i={i}

            />
          )}
        </div>
        <span className='number-page '>{page.number}</span>
      </div>
    </div>
  )
}

export default BookBackPages
