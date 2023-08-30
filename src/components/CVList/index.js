import React from 'react'
import * as styles from './cvlist.module.css'

const CVList = () => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <h2>Freelance Software Developer and Creative Technologist</h2>
      <h3>March 2017 - Present</h3>
      <p>Clients and work includes:</p>
      <ul>
        <li>Cycling '74</li>
        <li>The Barnes Foundation</li>
        <li>VIDVOX</li>
        <li>Mom + Pop Music</li>
        <li>Technical assitance for artists, Hannah Sawtell and Nancy Nowacek</li>
      </ul>
    </li>
    <li className={styles.item}>
      <h2>Researcher-in-Residence, DBRS Innovation Lab</h2>
      <h3>February 2017</h3>
    </li>
    <li className={styles.item}>
      <h2>Technology Artist in Residence, Pioneer Works</h2>
      <h3>September 2015 - November 2015</h3>
    </li>
    <li className={styles.item}>
      <h2>Full-Stack Web Developer, Big Human</h2>
      <h3>February 2015 - Deptember 2015</h3>
    </li>
    <li className={styles.item}>
      <h2>Web Development Student, Flatiron School</h2>
      <h3>September 2014 - December 2014</h3>
    </li>
    <li className={styles.item}>
      <h2>Financial Software Developer, Bloomberg</h2>
      <h3>September 2012 - September 2014</h3>
    </li>
    <li className={styles.item}>
      <h2>Bachelor of Science, Electrical Engineering, Johns Hopkins University</h2>
      <h3>September 2008 - May 2012</h3>
    </li>
    </ul>
)

export default CVList
