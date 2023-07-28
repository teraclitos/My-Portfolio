import Main from './views/Main'
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  dataBookSpanish,
  dataBookEnglish,
  allProyectsSpanish,
  allProyectsEnglish,
  indexSpanish,
  indexEnglish
} from './data/Data'

function App () {
  const [language, setLanguage] = useState('english')
  const [dataBook, setDataBook] = useState(dataBookSpanish)
  const indexInitial = dataBook
    .map((element, i, arr) => {
      if (i === 0) {
        return arr.length
      } else if (i === 1) {
        return arr.length - 20
      } else { return arr.length - 40 }
    })

  const translateInitial = dataBook.map((element) => 0)
  const [indexes, setIndexes] = useState(indexInitial)
  const [translateBook, setTranslateBook] = useState(0)
  const [pointerEvent, setPointerEvent] = useState('all')
  const [translate, setTranslate] = useState(translateInitial)
  const [widthScreen, setWidthScreen] = useState(window.innerWidth)
  const [allProyects, setAllProyects] = useState(allProyectsSpanish)
  const [positionPage, setPositionPage] = useState(0)
  const [index, setIndex] = useState(indexSpanish)
  const [openNav, setOpenNav] = useState(false)
  const [move, setMove] = useState(false)
  const [loader, setLoader] = useState(true)
  const [newLoad, setNewLoad] = useState(0)
  const [opacityLoader, setOpacityLoader] = useState('100%')
  const [displayLoader, setDisplayLoader] = useState('flex')
  const [bodyLoader, setBodyLoader] = useState('100vh')

  const handleWindowScreen = () => {
    setWidthScreen(window.innerWidth)
  }

  const functionTranslateFrontPage = (indexBook) => {
    const newTranslate = translate.map((element, i) =>
      i === indexBook ? -180 : element
    )

    setTranslate(newTranslate)
  }

  const functionChangePageForward = async (indexBook, start) => {
    const copyTranslation = [...translate]
    const copyIndexes = [...indexes]
    const numberOfTranslations = Math.ceil(indexBook / 2)

    const arrayNumberOfTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index
    )
    const lastIndexTranslated = copyTranslation.lastIndexOf(-180)
    const arrayEachOneOfTheTranslationsToMake = arrayNumberOfTranslation.reduce((ac, cu, i) => {
      ac.push(copyTranslation.map((el, j) => {
        if (j <= lastIndexTranslated + i + 1) {
          return -180
        } else {
          return 0
        }
      }))
      return ac
    }, [])

    const arrayEachOneOfThechangesOfIndexesToMake = arrayNumberOfTranslation.reduce((ac, cu, i) => {
      ac.push(copyIndexes.map((el, j, arr) => {
        if (i + start === j) {
          return arr.length
        } else if (i + start + 1 === j || i + start - 1 === j) {
          return arr.length - 20
        } else { return arr.length - 40 }
      }))
      return ac
    }, [])

    setPointerEvent('none')
    for (const translationNumberPromise of arrayNumberOfTranslation) {
      const promiseChangePage = async () => {
        setIndexes(arrayEachOneOfThechangesOfIndexesToMake[translationNumberPromise])
        await new Promise((resolve) => setTimeout(resolve, 200))
        setTranslate(arrayEachOneOfTheTranslationsToMake[translationNumberPromise])
      }
      await promiseChangePage()
    };
    setPointerEvent('all')
  }
  const functionChangePageBackward = async (indexBook, start) => {
    const copyTranslation = [...translate]
    const copyIndexes = [...indexes]
    const numberOfTranslations = Math.ceil(indexBook)

    const arrayNumberOfTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index
    )
    let lastIndexTranslated = copyTranslation.indexOf(0)
    if (lastIndexTranslated === -1) { lastIndexTranslated = dataBook.length }
    const arrayEachOneOfTheTranslationsToMake = arrayNumberOfTranslation.reduce((ac, cu, i) => {
      ac.push(copyTranslation.map((el, j) => {
        if (j >= lastIndexTranslated - i - 1) {
          return 0
        } else {
          return -180
        }
      }))
      return ac
    }, [])

    const arrayEachOneOfThechangesOfIndexesToMake = arrayNumberOfTranslation.reduce((ac, cu, i) => {
      ac.push(copyIndexes.map((el, j, arr) => {
        if (start - i === j) {
          return arr.length
        } else if (start - i + 1 === j || start - i - 1 === j) {
          return arr.length - 20
        } else { return arr.length - 40 }
      }))
      return ac
    }, [])

    setPointerEvent('none')
    for (const translationNumberPromise of arrayNumberOfTranslation) {
      const promiseChangePage = async () => {
        setIndexes(arrayEachOneOfThechangesOfIndexesToMake[translationNumberPromise])
        await new Promise((resolve) => setTimeout(resolve, 200))
        if (arrayEachOneOfTheTranslationsToMake[translationNumberPromise][0] === 0) {
          setMove(true)
        }
        setTranslate(arrayEachOneOfTheTranslationsToMake[translationNumberPromise])
      }
      await promiseChangePage()
    };
    setPointerEvent('all')
    setMove(false)
  }

  const functionTranslateBackPage = (indexBook) => {
    const newTranslate = translate.map((element, i) => (i === indexBook ? 0 : element))

    setTranslate(newTranslate)
  }

  const indexPage = (indexBook) => {
    const newindex = indexes.map((index, j, arr) => {
      if (indexBook === j) {
        return arr.length
      } else if (indexBook + 1 === j || indexBook - 1 === j) { return arr.length - 20 } else { return arr.length - 40 }
    })

    setIndexes(newindex)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowScreen)
  }, [widthScreen])

  useEffect(() => {
    if (language === 'spanish') {
      setAllProyects(allProyectsSpanish)
      setDataBook(dataBookSpanish)

      setIndex(indexSpanish)
    } else {
      setAllProyects(allProyectsEnglish)
      setDataBook(dataBookEnglish)

      setIndex(indexEnglish)
    }
  }, [language])
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
      setBodyLoader('auto')
    }, 2000)
  }, [newLoad])

  return (
    <BrowserRouter>
      <Main
        language={language}
        setLanguage={setLanguage}
        dataBook={dataBook}
        translateBook={translateBook}
        setTranslateBook={setTranslateBook}
        widthScreen={widthScreen}
        allProyects={allProyects}
        indexes={indexes}
        setIndexes={setIndexes}
        pointerEvent={pointerEvent}
        setPointerEvent={setPointerEvent}
        translate={translate}
        functionTranslateFrontPage={functionTranslateFrontPage}
        functionTranslateBackPage={functionTranslateBackPage}
        functionChangePageForward={functionChangePageForward}
        functionChangePageBackward={functionChangePageBackward}
        indexPage={indexPage}
        positionPage={positionPage}
        setPositionPage={setPositionPage}
        index={index}
        openNav={openNav}
        setOpenNav={setOpenNav}
        move={move}
        setMove={setMove}
        loader={loader}
        setLoader={setLoader}
        opacityLoader={opacityLoader}
        setOpacityLoader={setOpacityLoader}
        displayLoader={displayLoader}
        setDisplayLoader={setDisplayLoader}
        bodyLoader={bodyLoader}
        setBodyLoader={setBodyLoader}
        newLoad={newLoad}
        setNewLoad={setNewLoad}
        indexInitial={indexInitial}
      />
    </BrowserRouter>
  )
}

export default App
