import Main from './views/Main'
import { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  dataBookSpanish,
  dataBookEnglish,
  allProjectsSpanish,
  allProjectsEnglish,
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
  const [allProjects, setAllProjects] = useState(allProjectsSpanish)
  const [positionPage, setPositionPage] = useState(0)
  const [indexOfTheBook, setIndexOfTheBook] = useState(indexSpanish)
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
    console.log(translate)
    console.log(indexes)
  }, [translate, indexes])
  const translationsToMake = ({ numberOfTranslationsArray, isForward }) => {
    return numberOfTranslationsArray.reduce((ac, cu, i) => {
      let lastPageTranslated = isForward ? translate.lastIndexOf(-180) : translate.indexOf(0)
      if (lastPageTranslated === -1 && !isForward) lastPageTranslated = dataBook.length
      ac.push(translate.map((el, pageNumber) => {
        const translationToMake = i + 1
        const pagesToBeTranslated = isForward ? lastPageTranslated + translationToMake : lastPageTranslated - translationToMake
        const condition = isForward ? pageNumber <= pagesToBeTranslated : pageNumber >= pagesToBeTranslated
        if (condition) {
          return isForward ? -180 : 0
        } else {
          return isForward ? 0 : -180
        }
      }))
      return ac
    }, [])
  }
  const changesOfIndexesToMake = ({ numberOfTranslationsArray, startPosition, isForward }) => {
    return numberOfTranslationsArray.reduce((ac, cu, i) => {
      const condition = isForward ? startPosition + i : startPosition - i
      ac.push(indexes.map((el, j, arr) => {
        if (condition === j) {
          return arr.length
        } else if (condition + 1 === j || condition - 1 === j) {
          return arr.length - 20
        } else { return arr.length - 40 }
      }))
      return ac
    }, [])
  }
  const triggerTurnOfPages = async ({ arrayEachOneOfThechangesOfIndexesToMake, eachOneOfTheTranslationsToMake, numberOfTranslationsArray, isForward }) => {
    setPointerEvent('none')
    for (const translationNumberPromise of numberOfTranslationsArray) {
      const promiseChangePage = async () => {
        setIndexes(arrayEachOneOfThechangesOfIndexesToMake[translationNumberPromise])
        await new Promise((resolve) => setTimeout(resolve, 200))

        if (!isForward) {
          if (eachOneOfTheTranslationsToMake[translationNumberPromise][0] === 0) {
            setMove(true)
            await new Promise((resolve) => setTimeout(resolve, 200))
          }
        }
        setTranslate(eachOneOfTheTranslationsToMake[translationNumberPromise])
      }
      await promiseChangePage()
    };
    setPointerEvent('all')
    if (!isForward) setMove(false)
  }
  const functionChangePageForward = async (numberOfTranslationsToMake, startPosition) => {
    const numberOfTranslationsArray = Array.from(
      { length: numberOfTranslationsToMake },
      (_, index) => index
    )
    const eachOneOfTheTranslationsToMake = translationsToMake({ numberOfTranslationsArray, isForward: true })
    const arrayEachOneOfThechangesOfIndexesToMake = changesOfIndexesToMake({ numberOfTranslationsArray, startPosition, isForward: true })

    triggerTurnOfPages({ arrayEachOneOfThechangesOfIndexesToMake, eachOneOfTheTranslationsToMake, numberOfTranslationsArray, isForward: true })
  }
  const functionChangePageBackward = async (indexBook, startPosition) => {
    const isPenultimatePageAndLastIndexBookPosition = translate[translate.length - 2] === -180 && translate[translate.length - 1] === 0 && indexBook === dataBook.length
    const startPositionBackward = isPenultimatePageAndLastIndexBookPosition ? startPosition - 1 : startPosition

    const numberOfTranslations = isPenultimatePageAndLastIndexBookPosition
      ? Math.ceil(indexBook) - 1
      : Math.ceil(indexBook)

    const numberOfTranslationsArray = Array.from(
      { length: numberOfTranslations },
      (_, index) => index
    )
    const eachOneOfTheTranslationsToMake = translationsToMake({ numberOfTranslationsArray, isForward: false })
    const arrayEachOneOfThechangesOfIndexesToMake = changesOfIndexesToMake({ numberOfTranslationsArray, startPosition: startPositionBackward, isForward: false })
    triggerTurnOfPages({ arrayEachOneOfThechangesOfIndexesToMake, eachOneOfTheTranslationsToMake, numberOfTranslationsArray, isForward: false })
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowScreen)
  }, [widthScreen])

  useEffect(() => {
    if (language === 'spanish') {
      setAllProjects(allProjectsSpanish)
      setDataBook(dataBookSpanish)

      setIndexOfTheBook(indexSpanish)
    } else {
      setAllProjects(allProjectsEnglish)
      setDataBook(dataBookEnglish)

      setIndexOfTheBook(indexEnglish)
    }
  }, [language])
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
      setBodyLoader('auto')
    }, 2000)
  }, [newLoad])
  // useEffect(() => {
  //   console.log(indexes)
  //   console.log(translate)
  // }, [indexes, translate])

  return (
    <BrowserRouter>
      <Main
        language={language}
        setLanguage={setLanguage}
        dataBook={dataBook}
        translateBook={translateBook}
        setTranslateBook={setTranslateBook}
        widthScreen={widthScreen}
        allProjects={allProjects}
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
        indexOfTheBook={indexOfTheBook}
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
