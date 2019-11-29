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
          Engineering, <a href="https://cycling74.com/" target="_blank">Cycling '74</a>
        </h2>
        <p>
          Cycling '74 makes tools for sound, graphics, and interactivity.
          Max/MSP is an indispensable tool for creating interactive,
          audio/visual applications. 
        </p>
        <h3>Projects:</h3>
          <ul>
            <li>
              <a href="https://github.com/Cycling74/miraweb" target="_blank">
                Mira Web and Xebra.js
              </a>
            , a tool for multimedia artists to control Max/MSP while performing.
            </li>
          <li>
            <a href="https://cycling74.com/articles/node-for-max-intro-%E2%80%93-let%E2%80%99s-get-started" target="_blank">
              Node For Max
              </a>
            , which adds the flexibility and power of Node to Max/MSP. Also created examples, tutorials, and workshops
            for this package.
            </li>
          </ul>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://editor.p5js.org" target="_blank">
        <img src={p5} />
      </a>
      <div>
        <h2>
          Creator and Lead Maintainer, <a href="https://editor.p5js.org" target="_blank">p5.js Web Editor</a>
        </h2>
        <p>
          <a href="https://p5js.org/" target="_blank">p5.js</a> is a creative coding library for making interactive and
          generative visuals and sounds. As part of the ongoing effort
          to bring programming to a wider and more diverse audience, the
          Processing Foundation wanted to create a p5.js editor for the web.
          Goals for the project include making a beginner friendly environment,
          creating a tool for teaching, and making web accessibility a priority. 
          It is an open source project.
        </p>
        <p>
          <a href="https://medium.com/processing-foundation/hello-p5-js-web-editor-b90b902b74cf" target="_blank">Announcement Post</a>
          {" / "}
          <a href="https://www.youtube.com/watch?v=MZKKA7ynIxQ" target="_blank">Talk</a>
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
        <h3>Courses:</h3>
        <p>
          <ul>
            <li>
              <a href="https://github.com/ITPNYU/ICM-2018" target="_blank">Introduction to Computational Media</a>, Fall 2018
            </li>
            <li>
              Introduction to Computational Media, <a href="https://github.com/ITPNYU/ICM-2019-Code" target="_blank">Code</a> / 
              <a href="https://github.com/ITPNYU/ICM-2019-Media" target="_blank">Media</a>, Fall 2019
            </li>
            <li>
              <a href="https://github.com/itp-dwd/2020-spring" target="_blank">Dynamic Web Development</a>, Spring 2020 [WIP Curriculum]
            </li>
          </ul>
        </p>
      </div>
    </li>
  </ul>
)

export default ProjectList