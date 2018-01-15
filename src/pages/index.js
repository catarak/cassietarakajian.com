import React from 'react'
import Link from 'gatsby-link'
import portrait from '../assets/me.jpeg'

const IndexPage = () => (
  <div
    style={{
      height: '100%'
    }}
  >
    <div
      style={{
        background: `url(${portrait}) center center no-repeat`,
        backgroundSize: '100% auto',
        backgroundPosition: '50% 35%',
        width: '100%',
        height: '500px'
      }} 
    >
    </div>
    <p style={{padding: '50px'}}>software and hardware, creative technologist, musician, milennial, leo</p>
  </div>
)

export default IndexPage
