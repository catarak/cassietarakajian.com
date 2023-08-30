import React from 'React'
import { Link }  from 'gatsby'
import * as styles from './menu.module.css'

const Menu = () => (
  <nav className={styles.nav}>
    <h1 className={styles.logo}>
      <Link to="/">Cassie Tarakajian</Link>
    </h1>
    <ul className={styles.items}>
      <li className={styles.item}>
        <Link to="/work">Work</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/projects">Projects</Link>
      </li>
      <span className={styles.separator}>/</span>
      <li className={styles.item}>
        <Link to="/talks">Workshops and Talks</Link>
      </li>
    </ul>
  </nav>
)

export default Menu
