import React from 'react'
import Layout from '../components/layout'
import portrait from '../assets/me.jpeg'
import styles from './home.module.css'

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
        <p>technologist, educator, artist</p>
        <p>
          <a href="https://instagram.com/hellothisiscass" target="_blank" rel="noreferrer">Instagram</a>
          <span style={{ margin: '0 10px' }}>/</span>
          <a href="https://twitter.com/hellothisiscass" target="_blank" rel="noreferrer">Twitter</a>
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
