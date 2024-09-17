import React, { useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/all.css'
import { isMobile } from 'react-device-detect'
import LinkToMail from './LinkToMail'

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

  const proyectDisplay = (i) => {
    if (i > 3 && i < dataBook.length - 1) {
      return true
    } else {
      return false
    }
  }
  const paddingTopDisplay = (i) => {
    if (i === 3 || i > 4) {
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
        {dataBook.map((element, i) => (
          <div
            key={element.id}
            style={{
              zIndex: indexes[i],
              transform: `rotateY( ${translate[i]}deg`
            }}
            className='book'
          >
            <div
              onTouchStart={(e) => {
                onePageRight(i)
              }}
              onClick={(e) => {
                if (!isMobile) {
                  onePageRight(i)
                }
              }}
              className={i === 0 ? 'face-front portada' : 'face-front'}
              style={{ pointerEvents: pointerEvent }}
            >
              {i === 0 && (
                <div className='portada-container d-flex flex-column justify-content-center align-items-center'>
                  <div className='title-book-container'>
                    <h2 className='golden text-center old-letter first-title-tape'>
                      {element.tapeBookTitleFirst}
                    </h2>

                    <h2 className='golden  old-letter second-title-tape'>
                      {element.tapeBookTitleSecond}
                    </h2>
                  </div>
                  <img
                    className='img-logo-libro'
                    src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1685995705/logo-fondo-librorojo_qplqze.png'
                    alt='logo-libro'
                  />
                </div>
              )}
              <div className={paddingTopDisplay(i) ? 'pt-0' : 'pt-3'}>
                {i === 1 && (
                  <div className='book-title-container '>
                    <h5 className='text-center mt-3 sub-title-size letter-book-title'>
                      <i>{element.subtitleFront}</i>
                    </h5>
                    <h2 className='text-center old-letter red mt-3 title-size'>
                      {element.titleFront}
                    </h2>
                  </div>
                )}

                {positionOfIndexOfTheBookAndListOfProyects.includes(i) && (
                  <div>
                    <b>
                      <h2 className='letter-title-book title-size text-center mb-3'>
                        {element.titleFront}
                      </h2>
                    </b>
                    <ul className='list-style-none p-0 d-flex flex-column align-items-center '>
                      {i === positionOfTheIndexOfTheBook &&
                       indexOfTheBook.map((element, index) => (
                         <li key={element.id}>
                           {index === 2
                             ? (
                               <LinkToMail element={element} />
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
                                 {element.title}
                               </button>
                               )}
                         </li>
                       ))}
                      {i === positionOfTheListOfProyects &&
                        allProyects.map((element, index) => (
                          <li key={element.id}>
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
                              {element.proyect}
                            </button>
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className='letter-body-size text-description'>
                    {element.descriptionProyectFrontPage}
                  </p>
                </div>
                <div className='number-page'>{element.pageFrontNumber}</div>
              </div>
            </div>
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
                  <div className='d-flex flex-column align-items-center '>
                    <h2 className='title-size letter-title-book'>
                      {element.titleBack}
                    </h2>

                    <img className='img-me mt-3' src={element.url} alt='me' />
                    <button
                      type='button'
                      className='wooden-button wooden-button-cv mt-3
                    letter-title-book'
                      onClick={(e) => {
                        e.stopPropagation()
                        downloadCV()
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      CV
                    </button>
                  </div>
                )}

                {proyectDisplay(i) && (
                  <div className='d-flex flex-column align-items-center '>
                    <h2 className='letter-title-book title-size  text-center'>
                      {element.titleBack}
                    </h2>

                    <div onClick={(e) => {}} className='img-proyects-container'>
                      <a
                        className='links-book letter-title-book'
                        target='blank'
                        href={element.link}
                      >
                        <img
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                          onTouchStart={(e) => {
                            e.stopPropagation()
                          }}
                          className=' img-proyects'
                          src={element.url}
                          alt={element.titleBack}
                        />
                      </a>
                    </div>
                    <div
                      onClick={(e) => {
                        e.stopPropagation()
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation()
                      }}
                      className='d-flex  mt-3'
                    >
                      {element.github &&
                        <div className='wooden-button wooden-button-cv me-2'>
                          <a
                            className='links-book'
                            target='blank'
                            href={element.github}
                          >
                            <FontAwesomeIcon
                              className='icon-footer icon-git-book  '
                              icon={faGithub}
                            />
                          </a>
                        </div>}

                      <div className='wooden-button wooden-button-link '>
                        <a
                          className='links-book letter-title-book'
                          target='blank'
                          href={element.link}
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <div className=' d-flex  container-bottom'>
                  {indexProyects(i, 1) && (
                    <button
                      type='button'
                      style={{ pointerEvents: pointerEvent }}
                      className='back-to-index letter-title-book no-button-styles'
                      onClick={(e) => {
                        e.stopPropagation()
                        functionChangePageBackward(i - 1, i)
                        setPositionPage(2)
                      }}
                      onTouchStart={(e) => {
                        e.stopPropagation()
                      }}
                    >
                      {language === 'spanish' ? 'Índice' : 'Index'}
                    </button>
                  )}
                  {indexProyects(i, 3) && (
                    <button
                      type='button'
                      onTouchStart={(e) => {
                        e.stopPropagation()
                      }}
                      onClick={(e) => {
                        e.stopPropagation()
                        functionChangePageBackward(i - 3, i)
                        setPositionPage(4)
                      }}
                      className='back-to-proyects  letter-title-book no-button-styles'
                    >
                      {language === 'spanish' ? 'Proyectos' : 'Proyects'}
                    </button>
                  )}
                </div>
                <span className='number-page '>{element.pageBackNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default BookContainer
