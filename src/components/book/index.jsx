import React, { useEffect } from 'react'
import '../../styles/all.css'
import { isMobile } from 'react-device-detect'
import BookFrontPages from './book-front-pages'
import BookBackPages from './book-back-pages'
const BookContainer = ({
  language,
  dataBook,
  translateBook,
  setTranslateBook,
  widthScreen,
  allProyects,
  indexes,
  pointerEvent,
  setPointerEvent,
  translate,
  functionTranslateFrontPage,
  functionTranslateBackPage,
  functionChangePageForward,
  functionChangePageBackward,
  positionPage,
  setPositionPage,
  indexOfTheBook,
  openNav,
  setOpenNav,
  indexPage

}) => {
  const positionOfTheIndexOfTheBook = 2
  const positionOfTheListOfProyects = 4
  const lastPositionWithoutProyects = 3
  const positionOfIndexOfTheBookAndListOfProyects = [positionOfTheIndexOfTheBook, positionOfTheListOfProyects]
  useEffect(() => {
    document.title = 'Francisco Teran'
  }, [])
  const downloadCV = () => {
    const cvFile = '/FranciscoTerán CV.pdf'
    const urlcvFile = process.env.PUBLIC_URL + cvFile
    window.open(urlcvFile)
  }

  const onePageRight = (i) => {
    indexPage(i)

    setPositionPage(i)

    if (widthScreen > 575) {
      if (i === 0) {
        setTranslateBook('50%')
        setOpenNav(true)
      }

      if (i === dataBook.length - 1) {
        setTranslateBook('100%')
      }
    } else {
      if (i === 0) {
        setTranslateBook('calc(47vw - 50%)')
        setOpenNav(true)
      }
      if (i === dataBook.length - 1) {
        setTranslateBook('calc(72.5vw - 50%)')
      }
    }

    setPointerEvent('none')
    setTimeout(() => {
      functionTranslateFrontPage(i)
    }, 200)

    setTimeout(() => {
      setPointerEvent('all')
    }, 700)
  }
  const onePageLeft = (i) => {
    indexPage(i)
    setPositionPage(i)

    if (widthScreen > 575) {
      if (i === 0) {
        setTranslateBook('0%')
      }
      if (i === dataBook.length - 1) {
        setTranslateBook('50%')
      }
    } else {
      if (i === 0) {
        setTranslateBook('0px')
        setOpenNav(false)
      }
      if (i === dataBook.length - 1) {
        setTranslateBook('calc(47vw - 50%)')
      }
    }
    setPointerEvent('none')
    setTimeout(() => {
      functionTranslateBackPage(i)
    }, 200)
    setTimeout(() => {
      setPointerEvent('all')
    }, 700)
  }

  const projectDisplay = (pagePosition) => {
    if (pagePosition > lastPositionWithoutProyects && pagePosition < dataBook.length - 1) {
      return true
    } else {
      return false
    }
  }
  const paddingTopDisplay = (pagePositon) => {
    if (pagePositon === 3 || pagePositon > 4) {
      return true
    } else {
      return false
    }
  }

  const indexProyects = (i, min) => {
    if (i > min && i < dataBook.length - 1) {
      return true
    } else {
      return false
    }
  }
  return (
    <main>
      <section
        style={{
          transform: `translateX( ${translateBook}`
        }}
        className='book-content '
      >
        {dataBook.map((page, i) => (
          <div
            key={page.id}
            style={{
              zIndex: indexes[i],
              transform: `rotateY( ${translate[i]}deg`
            }}
            className='book'
          >
            <BookFrontPages
              onePageRight={onePageRight}
              isMobile={isMobile}
              i={i}
              pointerEvent={pointerEvent}
              page={page.frontPage}
              functionChangePageForward={functionChangePageForward}
              paddingTopDisplay={paddingTopDisplay}
              positionOfIndexOfTheBookAndListOfProyects={positionOfIndexOfTheBookAndListOfProyects}
              positionOfTheIndexOfTheBook={positionOfTheIndexOfTheBook}
              positionOfTheListOfProyects={positionOfTheListOfProyects}
              indexOfTheBook={indexOfTheBook}
              allProyects={allProyects}
              setPositionPage={setPositionPage}
            />
            <BookBackPages
              onePageLeft={onePageLeft}
              isMobile={isMobile}
              dataBook={dataBook}
              pointerEvent={pointerEvent}
              i={i}
              page={page.backPage}
              downloadCV={downloadCV}
              projectDisplay={projectDisplay}
              indexProyects={indexProyects}
              functionChangePageBackward={functionChangePageBackward}
              setPositionPage={setPositionPage}
              language={language}
            />
          </div>
        ))}
      </section>
    </main>
  )
}

export default BookContainer
