import React from 'react'
import * as styles from './projectlist.module.css'
import aiml from '../../assets/viz1.gif'
import wikisonnet from '../../assets/wikisonnet_still.png'
import miraweb from '../../assets/mira2.jpg'
import vr from '../../assets/vr.png'
import flume from '../../assets/flume1.png'
import dividend from '../../assets/dividend.png'
import mansplain from '../../assets/mansplain.png'
import skatroom from '../../assets/skatroom.jpg'
import holdr from '../../assets/holdr1.png'
import corporate from '../../assets/corporate.jpg'
import soylent from '../../assets/soylentForWomen.jpg'
import gl from '../../assets/gl2.png'
import lullabies from '../../assets/lullabiesforai.jpg'
import cycling from '../../assets/cycling.jpg'
import p5 from '../../assets/p5js.png'
import itp from '../../assets/itp.png'

const WorkList = () => (
  <ul className={styles.items}>
        <li className={styles.item}>
      <a href="https://editor.p5js.org" target="_blank" rel="noreferrer">
        <img src={p5} />
      </a>
      <div>
        <h2>
          Creator and Lead Maintainer, <a href="https://editor.p5js.org" target="_blank" rel="noreferrer">p5.js Web Editor</a>, 2016-2022
        </h2>
        <h2>
          Mentor, <a href="https://editor.p5js.org" target="_blank" rel="noreferrer">p5.js Web Editor</a>, 2022-Present
        </h2>
        <p>
          <a href="https://p5js.org/" target="_blank" rel="noreferrer">p5.js</a> is a creative coding library for making interactive and
          generative visuals and sounds. As part of the ongoing effort
          to bring programming to a wider and more diverse audience, the
          Processing Foundation wanted to create a p5.js editor for the web.
          Goals for the project include making a beginner friendly environment,
          creating a tool for teaching, and making web accessibility a priority. 
          It is an open source project.
        </p>
        <p>
          <a href="https://medium.com/processing-foundation/hello-p5-js-web-editor-b90b902b74cf" target="_blank" rel="noreferrer">Announcement Post</a>
          {" / "}
          <a href="https://www.youtube.com/watch?v=MZKKA7ynIxQ" target="_blank" rel="noreferrer">Talk</a>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://cycling74.com/" target="_blank" rel="noreferrer">
        <img src={cycling} />
      </a>
      <div>
        <h2>
          Engineering, <a href="https://cycling74.com/" target="_blank" rel="noreferrer">Cycling '74</a>
        </h2>
        <p>
          Cycling '74 makes tools for sound, graphics, and interactivity.
          Max/MSP is an indispensable tool for creating interactive,
          audio/visual applications. 
        </p>
        <h3>Projects:</h3>
          <ul>
            <li>
              <a href="https://github.com/Cycling74/miraweb" target="_blank" rel="noreferrer">
                Mira Web and Xebra.js
              </a>
            , a tool for multimedia artists to control Max/MSP while performing.
            </li>
          <li>
            <a href="https://cycling74.com/articles/node-for-max-intro-%E2%80%93-let%E2%80%99s-get-started" target="_blank" rel="noreferrer">
              Node For Max
              </a>
            , which adds the flexibility and power of Node to Max/MSP. Also created examples, tutorials, and workshops
            for this package.
            </li>
          </ul>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://tisch.nyu.edu/itp" target="_blank" rel="noreferrer">
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
              <a href="https://github.com/ITPNYU/ICM-2018" target="_blank" rel="noreferrer">Introduction to Computational Media</a>, Fall 2018
            </li>
            <li>
              Introduction to Computational Media, <a href="https://github.com/ITPNYU/ICM-2019-Code" target="_blank" rel="noreferrer">Code</a> /&nbsp;  
              <a href="https://github.com/ITPNYU/ICM-2019-Media" target="_blank" rel="noreferrer">Media</a>, Fall 2019
            </li>
            <li>
              <a href="https://github.com/itp-dwd/2020-spring" target="_blank" rel="noreferrer">Dynamic Web Development</a>, Spring 2020
            </li>
            <li>
              Blessed/Blursed/Cursed, <a href="https://blursed.notion.site/Blessed-Blursed-Cursed-deb0791b0cf745ffa171c20aa3dddb32?pvs=4" target="_blank" rel="noreferrer">Spring 2021</a> /&nbsp; 
              <a href="https://blursed.notion.site/Blessed-Blursed-Cursed-2022-d5629ae70c2745db83e0d0a63db32e08?pvs=4" target="_blank" rel="noreferrer">Spring 2022</a> /&nbsp; 
              <a href="https://blursed.notion.site/Blessed-Blursed-Cursed-Spring-2023-5e53662663b2425496f4ba436a083be1?pvs=4" target="_blank" rel="noreferrer">Spring 2023</a>
            </li>
          </ul>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="http://girlfriends.site" target="_blank" rel="noreferrer">
        <img src={gl} />
      </a>
      <div>
        <h2>
          Cofounder, <a href="http://girlfriends.site" target="_blank" rel="noreferrer">Girlfriends Labs</a>
        </h2>
        <p>
          Girlfriends Labs is a creative agency that specializes
          in websites, apps, installations and emerging techniques.
          We build tools to problem solve and create seamless experiences.
        </p>
      </div>
    </li>
  </ul>
)

export default WorkList
