import React, { useState, useEffect } from 'react'

import '../styles/all.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({
  language,
  setLanguage,
  setTranslateBook,
  pointerEvent,
  setPointerEvent,
  functionTranslateFrontPage,
  functionTranslateBackPage,
  indexPage,
  functionChangePageBackward,
  positionPage,
  setPositionPage,
  dataBook,
  widthScreen,
  functionChangePageForward,
  navBarLinks,
  openNav,
  setOpenNav,
  move
}) => {
  const [moveResponsive, setMoveResponsive] = useState(false)

  const nameTilte = () => {
    if (widthScreen > 992) {
      if (language === 'english') {
        return 'FRANCISCO TERAN'
      } else {
        return 'FRANCISCO TERÁN'
      }
    } else {
      if (language === 'english') {
        return 'F.TERAN'
      } else {
        return 'F.TERÁN'
      }
    }
  }
  const indexFunctionBook = () => {
    if (widthScreen <= 992) {
      if (!openNav) {
        functionChangePageForward(4, 0)

        setPositionPage(2)
        if (widthScreen > 575) {
          setTranslateBook('50%')
        } else {
          setTranslateBook('calc(47vw - 50%)')
        }
      } else {
        functionChangePageBackward(positionPage + 1, positionPage)

        if (dataBook.length === positionPage + 1) {
          setTranslateBook('calc(47vw - 50%)')
        }
        setMoveResponsive(true)
        setPositionPage(0)
      }
    } else {
      if (positionPage < 2) {
        functionChangePageForward((2 - positionPage) * 2, positionPage)
        if (positionPage === 0) {
          setTranslateBook('50%')
        }
      } else {
        functionChangePageBackward(positionPage - 1, positionPage)
        if (positionPage + 1 === dataBook.length) {
          setTranslateBook('50%')
        }
      }
      setPositionPage(2)
    }
  }
  const functionLanguage = () => {
    language === 'spanish' ? setLanguage('english') : setLanguage('spanish')
  }
  useEffect(() => {
    if ((move, moveResponsive)) {
      setTranslateBook('0%')
      setMoveResponsive(false)
    }
  }, [move])
  return (
    <div className=' px-3 px-lg-5   d-flex justify-content-between align-items-center nav-bar  '>
      <div className='open-container d-flex d-lg-none'>
        <FontAwesomeIcon
          style={{ pointerEvents: pointerEvent }}
          onClick={() => {
            !openNav ? setOpenNav(true) : setOpenNav(false)

            if (!openNav) {
              setOpenNav(true)
            }
            indexFunctionBook()
          }}
          className='responsive-open red '
          icon={!openNav ? faBars : faXmark}
        />
      </div>

      <h1 className='text-center  portfolio-name mb-0 '>
        <a
          href='/'
          className='old-letter red link-main-title'
        >

          {nameTilte()}
        </a>

      </h1>

      <div className='  d-flex justify-content-around ms-lg-5  align-items-center '>
        <button
          type='button'
          onClick={() => {
            indexFunctionBook()
          }}
          className='link-nav text-center dark-brown no-button-styles'

        >
          <span
            style={{ pointerEvents: pointerEvent }}
            className='hover-nav-link letter-title-book d-none d-lg-inline-block'

          >
            {language === 'english' ? 'Index' : 'Índice'}
          </span>
        </button>

        <button
          type='button'
          className='py-3 d-flex ms-lg-5  justify-content-center wooden-button letter-title-book'
          onClick={() => {
            functionLanguage()
          }}
        >
          {language === 'english' ? 'Español' : 'English'}
        </button>
      </div>
    </div>
  )
}

export default NavBar
