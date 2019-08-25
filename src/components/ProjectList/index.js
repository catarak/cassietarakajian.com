import React from 'react'
import cycling from '../../assets/cycling.jpg'
import p5 from '../../assets/p5js.png'
import itp from '../../assets/itp.png'

import styles from './projectlist.module.css'

const ProjectList = () => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <a href="https://cycling74.com/" target="_blank">
        <img src={cycling} />
      </a>
      <div>
        <h2>
          Engineering, Cycling '74
        </h2>
        <p>
          Cycling '74 makes tools for sound, graphics, and interactivity.
          Max/MSP is an indispensable tool for creating interactive,
          audio/visual applications. 
        </p>
        <p>
          Projects include&nbsp;
            <a href="https://github.com/Cycling74/miraweb" target="_blank">
              MiraWeb and Xebra.js
            </a>
          , a tool for multimedia artists to control Max/MSP while performing.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://editor.p5js.org" target="_blank">
        <img src={p5} />
      </a>
      <div>
        <h2>
          Creator and Lead Maintainer, p5.js Web Editor
        </h2>
        <p>
          p5.js is an creative coding library for making interactive and
          generative visuals and sounds. As part of their ongoing effort
          to bring programming to a wider and more diverse audience, the
          Processing Foundation and NYU ITP wanted to create a p5.js editor
          for the web. Goals for the project include making a beginner
          friendly environment, creating a tool for teaching, and making
          web accessibility a priority. It is an open source project.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://tisch.nyu.edu/itp" target="_blank">
        <img src={itp} />
      </a>
      <div>
        <h2>
          Adjunct Professor, NYU ITP
        </h2>
        <p>
          ITP is a two-year graduate program located in the Tisch School of
          the Arts whose mission is to explore the imaginative use of
          communications technologies—how they might augment, improve, and
          bring delight and art into people's lives.
        </p>
        <p>
          Currently teaching&nbsp;
          <a href="https://github.com/ITPNYU/ICM-2018" target="_blank">
            Introduction to Computational Media
          </a>.
        </p>
      </div>
    </li>
  </ul>
)

export default ProjectList