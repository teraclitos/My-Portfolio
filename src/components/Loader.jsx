import React, { useEffect } from 'react'
import '../styles/all.css'

const Loader = ({
  loader,
  setLoader,
  opacityLoader,
  setOpacityLoader,
  displayLoader,
  setDisplayLoader
}) => {
  useEffect(() => {
    if (loader === false) {
      setOpacityLoader('0%')
      setTimeout(() => {
        setDisplayLoader('none')
      }, 500)
    }
  }, [loader])

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
        <div className='lds-dual-ring' />
      </div>
    </div>
  )
}

export default Loader
