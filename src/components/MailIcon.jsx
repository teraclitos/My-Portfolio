import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const MailIcon = () => {
  return (
    <a className='icon-footer-link' href='mailto:tefans12@gmail.com'>
      <FontAwesomeIcon className='icon-footer' icon={faEnvelope} />
    </a>
  )
}

export default MailIcon
