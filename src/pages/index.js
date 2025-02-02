import React from 'react'
import Layout from '../components/layout'
import portrait from '../assets/me.jpeg'
import * as styles from './home.module.css'

const IndexPage = () => (
  <Layout>
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
        <p>software developer, creative technologist, educator, artist</p>
        <p>
          <a href="https://bsky.app/profile/hellothisiscass.bsky.social" target="_blank" rel="noreferrer">Bluesky</a>
          <span style={{margin: '0 10px'}}>/</span>
          <a href="https://github.com/catarak" target="_blank" rel="noreferrer">Github</a>
          <span style={{margin: '0 10px'}}>/</span>
          <a href="mailto:ctarakajian@gmail.com" target="_blank" rel="noreferrer">Email</a>
          <span style={{margin: '0 10px'}}>/</span>
          <span>CV Upon Request</span>
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
