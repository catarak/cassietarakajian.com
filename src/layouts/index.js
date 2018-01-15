import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import Menu from '../components/Menu'

/*
style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
*/

const TemplateWrapper = ({ children }) => (
  <div
    style={{
      backgroundColor: 'black',
      color: 'white',
      height: '100%'
    }}
  >
    <Helmet
      title="Cassie Tarakajian"
      meta={[
        { name: 'description', content: 'The portfolio website of Cassie Tarakajian, software developer, creative technologist, musician, and artist.' },
        { name: 'keywords', content: 'software, hardware' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
      }}
    >
      <Menu />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
