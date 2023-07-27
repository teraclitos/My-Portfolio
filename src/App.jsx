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
    .map((element, i) => {
      if (i >= dataBook.length - 2) {
        return i
      } else {
        return dataBook.length - 3
      }
    })
    .reverse()
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

  const functionTranslateFrontPage = (d, start) => {
    const newTranslate = translate.map((element, i) =>
      i === d ? -180 : element
    )

    setTranslate(newTranslate)
  }

  const functionPageIndex = async (proyectoId, start) => {
    // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
    // const copyTranslation = [...translate]
    // const copyIndexes = [...indexes]
    const numberOfTranslations = Math.ceil(proyectoId / 2)

    const arrayNumberOfTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index
    )

    // const lastIndexTranslated = copyTranslation.lastIndexOf(-180)
    // const lasIndexWithHigherValue = copyIndexes.lastIndexOf(copyIndexes.length - 1)

    // const arrayEachOneOfTheTranslationsToMake = arrayNumberOfTranslation.reduce((ac, cu, i) => {
    //   ac.push(copyTranslation.map((el, j) => {
    //     if (j <= lastIndexTranslated + i + 1) {
    //       return -180
    //     } else {
    //       return 0
    //     }
    //   }))
    //   return ac
    // }, [])

    // const arrayEachOneOfThechangesOfIndexesToMake = arrayNumberOfTranslation.reduce((ac, cu, i) => {
    //   ac.push(copyIndexes.map((el, j) => {
    //     if (j === lasIndexWithHigherValue + i + 1) {
    //       return copyIndexes.length - 1
    //     } else if (j === lasIndexWithHigherValue + i + 2) { return copyIndexes.length - 2 } else { return copyIndexes.length - 3 }
    //   }))
    //   return ac
    // }, [])
    // const arrayNumberOfTranslationPromises = arrayNumberOfTranslation.map((el, i) => {
    //   return new Promise((resolve) => setTimeout(() => resolve(
    //     setIndex(arrayEachOneOfThechangesOfIndexesToMake[i]),
    //     setTranslate(arrayEachOneOfTheTranslationsToMake[i])

    //   ), 500))
    // })

    // for (const trasnsalationNumber of arrayNumberOfTranslation) {
    //   await new Promise(async () => {
    //     setIndex(arrayEachOneOfThechangesOfIndexesToMake[trasnsalationNumber])
    //     await delay(200)
    //     setTranslate(arrayEachOneOfTheTranslationsToMake[trasnsalationNumber])
    //   }, 500)
    // };

    arrayNumberOfTranslation.forEach((element, i) => {
      setPointerEvent('none')
      setTimeout(() => {
        const newTranslate = translate.map((element, index) =>
          index <= i + start ? -180 : element
        )

        const newindex = indexes.map((element, i3) => {
          if (i + start === i3) {
            return dataBook.length - 1
          } else {
            if (i + start === i3 - 1) {
              return dataBook.length - 2
            } else if (i + start === dataBook.length - 1) {
              return dataBook.length - 2
            } else {
              return dataBook.length - 3
            }
          }
        })

        setIndexes(newindex)

        setTimeout(() => {
          setTranslate(newTranslate)
        }, 200)

        if (i === arrayNumberOfTranslation.length - 1) {
          setTimeout(() => {
            setPointerEvent('all')
          }, 700)
        }
      }, i * 500)
    })
  }
  const backToIndex = (proyectoId, start) => {
    const numberOfTranslations = Math.ceil(proyectoId / 2 + start)

    const arrayNumberOfTranslation = Array.from(
      { length: numberOfTranslations },
      (_, index) => index + 1
    )

    arrayNumberOfTranslation.forEach((element, i) => {
      setPointerEvent('none')
      setTimeout(() => {
        const newTranslate = translate.map((element, index) =>
          index + start >= arrayNumberOfTranslation.length - i ? 0 : element
        )

        const newindex = indexes.map((element, i3) => {
          if (arrayNumberOfTranslation.length - i - start === i3) {
            return dataBook.length - 1
          } else {
            if (arrayNumberOfTranslation.length - i - start === i3 - 1) {
              return dataBook.length - 2
            } else {
              return dataBook.length - 3
            }
          }
        })

        setIndexes(newindex)

        setTimeout(() => {
          setTranslate(newTranslate)
        }, 200)

        if (i === arrayNumberOfTranslation.length - 1) {
          setMove(true)
          setTimeout(() => {
            setPointerEvent('all')
            setMove(false)
          }, 700)
        }
      }, i * 500)
    })
  }

  const functionTranslateBackPage = (d) => {
    const newTranslate = translate.map((element, i) => (i === d ? 0 : element))

    setTranslate(newTranslate)
  }

  const indexPage = (d) => {
    const newindex = indexes.map((element, i) => {
      if (i === d) {
        return dataBook.length - 1
      } else {
        if (i === d + 1) {
          return dataBook.length - 2
        } else if (d === dataBook.length - 1 && i === d - 1) {
          return dataBook.length - 2
        } else {
          return dataBook.length - 3
        }
      }
    })

    setIndexes(newindex)
    if (d === dataBook.length - 1 && positionPage === dataBook.length) {
      const exceptionIndex = indexes.map((element, i) => {
        if (i === dataBook.length - 1) {
          return dataBook.length - 2
        } else if (i === dataBook.length - 2) {
          return dataBook.length - 1
        } else {
          return dataBook.length - 3
        }
      })
      setTimeout(() => {
        setIndexes(exceptionIndex)
      }, 500)
    }
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
  useEffect(() => {
    console.log(translate)
    console.log(indexes)
  }, [translate, indexes])
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
        functionPageIndex={functionPageIndex}
        backToIndex={backToIndex}
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
