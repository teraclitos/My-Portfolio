import React from 'react'
import { IconContext } from 'react-icons'

import { FaReact, FaHtml5, FaCss3Alt, FaVuejs, FaNode } from 'react-icons/fa'

import { IoLogoJavascript } from 'react-icons/io'

import { RiVuejsFill } from 'react-icons/ri'

import { SiMongodb, SiPostman, SiSocketdotio, SiTypescript, SiRedux } from 'react-icons/si'
import { Tooltip } from 'react-tooltip'

const Technologies = ({ language }) => {
  const tooltips = {
    english: {
      vue: 'Vue.js<br>Level: Intermediate <br>Years: 1 year',
      vuex: 'Vuex<br>Level: Intermediate <br>Years: 1 year',
      js: 'JavaScript<br>Level: Intermediate <br>Years: 2.5 years',
      react: 'React<br>Level: Intermediate <br>Years: 1 years',
      html: 'HTML5<br>Level: Intermediate <br>Years: 2.5 years',
      css: 'CSS3<br>Level: Intermediate <br>Years: 2.5 years',
      redux: 'Redux<br>Level: Learning <br>Years: 0 years',
      typescript: 'TypeScript<br>Level: Learning <br>Years: 0 year',
      node: 'Node.js<br>Level: Intermediate <br>Years: 1.5 years',
      mongodb: 'MongoDB<br>Level: Intermediate <br>Years: 1.5 year',
      postman: 'Postman<br>Level: Intermediate <br>Years: 1.5 years',
      socket: 'Socket.io<br>Level: Basic <br>Years: 0.5 year'
    },
    spanish: {
      vue: 'Vue.js<br>Nivel: Intermedio <br>Años: 1 año',
      vuex: 'Vuex<br>Nivel: Intermedio <br>Años: 1 año',
      js: 'JavaScript<br>Nivel: Intermedio <br>Años: 2.5 años',
      react: 'React<br>Nivel: Intermedio <br>Años: 1 años',
      html: 'HTML5<br>Nivel: Intermedio <br>Años: 2.5 años',
      css: 'CSS3<br>Nivel: Intermedio <br>Años: 2.5 años',
      redux: 'Redux<br>Nivel: Aprendiendo <br>Años: 0 años',
      typescript: 'TypeScript<br>Nivel: Aprendiendo<br>Años: 0 año',
      node: 'Node.js<br>Nivel: Intermedio <br>Años: 1.5 años',
      mongodb: 'MongoDB<br>Nivel: Intermedio <br>Años: 1.5 año',
      postman: 'Postman<br>Nivel: Intermedio <br>Años: 1.5 años',
      socket: 'Socket.io<br>Nivel: Básico <br>Años: 0.5 año'
    }
  }

  // Selección del contenido basado en el idioma
  const currentTooltips = tooltips[language]
  return (
    <div className='d-flex flex-column flex-lg-row justify-content-center align-items-center gap-2 my-5 pb-3 '>
      {/* <h2 className='text-center red '>{language === 'spanish' ? 'Mis tecnologías' : 'My technologies'}:</h2> */}
      <div className='d-flex gap-3 justify-content-center flex-wrap'>
        <IconContext.Provider value={{ color: '#c8293b', className: 'icon-footer fs-1' }}>
          <FaVuejs className='icon' data-tooltip-id='vue-tooltip' data-tooltip-html={currentTooltips.vue} />
          <Tooltip id='vue-tooltip' />

          <RiVuejsFill className='icon' data-tooltip-id='vuex-tooltip' data-tooltip-html={currentTooltips.vuex} />
          <Tooltip id='vuex-tooltip' />

          <IoLogoJavascript className='icon' data-tooltip-id='js-tooltip' data-tooltip-html={currentTooltips.js} />
          <Tooltip id='js-tooltip' />

          <FaReact className='icon' data-tooltip-id='react-tooltip' data-tooltip-html={currentTooltips.react} />
          <Tooltip id='react-tooltip' />

          <FaHtml5 className='icon' data-tooltip-id='html-tooltip' data-tooltip-html={currentTooltips.html} />
          <Tooltip id='html-tooltip' />

          <FaCss3Alt className='icon' data-tooltip-id='css-tooltip' data-tooltip-html={currentTooltips.css} />
          <Tooltip id='css-tooltip' />

          <SiRedux className='icon' data-tooltip-id='redux-tooltip' data-tooltip-html={currentTooltips.redux} />
          <Tooltip id='redux-tooltip' />

          <SiTypescript className='icon' data-tooltip-id='typescript-tooltip' data-tooltip-html={currentTooltips.typescript} />
          <Tooltip id='typescript-tooltip' />

          <FaNode className='icon' data-tooltip-id='node-tooltip' data-tooltip-html={currentTooltips.node} />
          <Tooltip id='node-tooltip' />

          <SiMongodb className='icon' data-tooltip-id='mongodb-tooltip' data-tooltip-html={currentTooltips.mongodb} />
          <Tooltip id='mongodb-tooltip' />

          <SiPostman className='icon' data-tooltip-id='postman-tooltip' data-tooltip-html={currentTooltips.postman} />
          <Tooltip id='postman-tooltip' />

          <SiSocketdotio className='icon' data-tooltip-id='socket-tooltip' data-tooltip-html={currentTooltips.socket} />
          <Tooltip id='socket-tooltip' />
        </IconContext.Provider>

      </div>
    </div>

  )
}

export default Technologies
