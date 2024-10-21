import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const WhatsupIcon = ({ language }) => {
  return (
    <a
      className='icon-footer-link'
      target='_blank'
      href={
        language === 'english'
          ? 'https://wa.link/otcpwg'
          : 'https://wa.link/ibnibl'
      } rel='noreferrer'
    >
      <FontAwesomeIcon className='icon-footer' icon={faWhatsapp} />
    </a>
  )
}

export default WhatsupIcon
