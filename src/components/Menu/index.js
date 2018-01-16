import React from 'React'
import Link from 'gatsby-link'
import styles from './menu.module.css'

const Menu = () => (
  <nav className={styles.nav}>
    <h1 className={styles.logo}>
      <Link to="/">Cassie Tarakajian</Link>
    </h1>
    <ul className={styles.items}>
      <li className={styles.item}>
        <Link to="/current-projects">Current Projects</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/past-projects">Past Projects</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/talks">Workshops and Talks</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/cv">CV</Link>
      </li>
    </ul>
  </nav>
)

export default Menu
