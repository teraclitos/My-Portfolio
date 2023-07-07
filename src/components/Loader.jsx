import React, { useEffect, useState } from 'react'
import '../styles/all.css'

const Loader = ({
  loader,
  setLoader,
  opacityLoader,
  setOpacityLoader,
  displayLoader,
  setDisplayLoader
}) => {
  const [spinnerDisplay, setSpinnerDisplay] = useState('none')
  const showSpinner = () => { setSpinnerDisplay('flex') }
  useEffect(() => {
    if (loader === false) {
      setOpacityLoader('0%')
      setTimeout(() => {
        setDisplayLoader('none')
      }, 500)
    }
  }, [loader])

  useEffect(() => {
    setTimeout(() => {
      showSpinner()
    }, 200)
  }, [])

  return (
    <div
      style={{ opacity: opacityLoader, display: displayLoader }}
      className='loader-container '
    >
      <div className='logo-loading-container'>
        <img
          src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1685998235/logo-loading-nuevo_dxsgnj.png'
          alt='logo-loading'
          className='logo-loading'
        />
        <div style={{ display: `${spinnerDisplay}` }} className='lds-dual-ring' />
      </div>
    </div>
  )
}

export default Loader
