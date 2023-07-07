import React from 'react'
import MailIcon from './MailIcon'
import GitHubIcon from './GitHubIcon'
import LinkedinIcon from './LinkedinIcon'
import WhatsupIcon from './WhatsupIcon'
import '../styles/all.css'

const Footer = ({ language }) => {
  return (
    <footer className='py-2 px-lg-5 d-flex flex-column flex-lg-row justify-content-between align-items-center red  '>
      <a href='/' className='mb-4 mb-lg-0 '>
        <img
          className='logo-footer'
          src='https://res.cloudinary.com/duuwqmpmn/image/upload/v1685995702/logo-main-page_groqjz.png'
          alt='logo-footer'
        />
      </a>
      <div className='d-flex justify-content center icon-footer-container'>
        <MailIcon />
        <GitHubIcon />
        <LinkedinIcon />
        <WhatsupIcon language={language} />
      </div>
    </footer>
  )
}

export default Footer
