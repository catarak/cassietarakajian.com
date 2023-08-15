import React from 'React'
import { Link }  from 'gatsby'
import styles from './menu.module.css'

const Menu = () => (
  <nav className={styles.nav}>
    <h1 className={styles.logo}>
      <Link to="/">Cassie Tarakajian</Link>
    </h1>
    <ul className={styles.items}>
      <li className={styles.item}>
        <Link to="/current-projects">Current</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/past-projects">Past</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/talks">Workshops and Talks</Link>
      </li>
    </ul>
  </nav>
)

export default Menu
