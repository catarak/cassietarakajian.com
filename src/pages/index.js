import React from 'react'
import Link from 'gatsby-link'
import portrait from '../assets/me.jpeg'
import styles from './home.module.css'

const IndexPage = () => (
  <div
    style={{
      height: '100%'
    }}
  >
    <div
      style={{
        backgroundImage: `url(${portrait})`
      }} 
      className={styles.portrait}
    >
    </div>
    <img className={styles.mobilePortrait} src={portrait} />
    <div className={styles.info}>
      <p>software and hardware, creative technologist, musician, milennial, leo</p>
      <p>
        <a href="https://twitter.com/hellothisiscass" target="_blank">Twitter</a>
        <span style={{margin: '0 10px'}}>/</span>
        <a href="https://github.com/catarak" target="_blank">Github</a>
        <span style={{margin: '0 10px'}}>/</span>
        <a href="mailto:ctarakajian@gmail.com" target="_blank">Email</a>
      </p>
    </div>
  </div>
)

export default IndexPage
