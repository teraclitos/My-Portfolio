import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const BookProjectLinksAndTitle = ({ page }) => {
  return (
    <div className='d-flex flex-column align-items-center '>
      <h2 className='letter-title-book title-size  text-center'>
        {page.title}
      </h2>
      <div onClick={(e) => {}} className='img-proyects-container'>
        <a
          className='links-book letter-title-book'
          target='_blank'
          href={page.link} rel='noreferrer'
        >
          <img
            onClick={(e) => {
              e.stopPropagation()
            }}
            className=' img-proyects'
            src={page.url}
            alt={page.title}
          />
        </a>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className='d-flex  mt-3'
      >
        {page.github &&
          <div className='wooden-button wooden-button-cv me-2'>
            <a
              className='links-book'
              target='_blank'
              href={page.github} rel='noreferrer'
            >
              <FontAwesomeIcon
                className='icon-footer icon-git-book  '
                icon={faGithub}
              />
            </a>
          </div>}
        <div className='wooden-button wooden-button-link '>
          <a
            className='links-book letter-title-book'
            target='_blank'
            href={page.link} rel='noreferrer'
          >
            Link
          </a>
        </div>
      </div>
    </div>

  )
}

export default BookProjectLinksAndTitle
