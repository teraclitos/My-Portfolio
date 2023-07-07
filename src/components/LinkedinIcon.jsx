import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const LinkedinIcon = () => {
  return (
    <a
      className='icon-footer-link'
      target='blank'
      href='https://www.linkedin.com/in/francisco-teran/'
    >
      <FontAwesomeIcon className='icon-footer' icon={faLinkedin} />
    </a>
  )
}

export default LinkedinIcon
