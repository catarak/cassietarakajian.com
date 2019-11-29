import React from 'react'
import ccfest from '../../assets/ccfest.jpg'
import pcd from '../../assets/pcd.png'
import miami from '../../assets/miami.jpg'
import itpcamp from '../../assets/itpcamp.jpg'
import ddc from '../../assets/ddc.jpg'
import styles from './talkslist.module.css'

const TalksList = () => (
  <ul className={styles.talks}>
    <li className={styles.talk}>
      <div>
        <h2>
          <a href="https://github.com/catarak/eyebeam-intro-to-max" target="_blank">Eyebeam Digital Day Camp</a>
        </h2>
        <h3>Summer 2019</h3>
        <p>Creating Digital Instruments in Max/MSP</p>
      </div>
      <img src={ddc} />
    </li>
    <li className={styles.talk}>
      <div>
        <h2>
          <a href="https://github.com/catarak/intro-n4m-workshop" target="_blank">Expo '74 2019</a>
        </h2>
        <h3>Spring 2019</h3>
        <p>Getting Started with Node For Max</p>
      </div>
      <img src={ddc} />
    </li>
    <li className={styles.talk}>
      <div>
        <h2>
          <a href="https://day.processing.org/" target="_blank">Processing Community Day</a>
        </h2>
        <h3>Fall 2017</h3>
        <p>A p5.js Web Editor for all</p>
        <p><a href="https://www.youtube.com/watch?v=MZKKA7ynIxQ" target="_blank">Video</a></p>
      </div>
      <img src={pcd} />
    </li>
    <li className={styles.talk}>
      <div>
        <h2><a href="http://ccfest.rocks/" target="_blank">CCFest</a>, Keynote and Workshops</h2>
        <h3>Spring 2017, Fall 2017</h3>
      </div>
      <img src={ccfest} />
    </li>
    <li className={styles.talk}>
      <div>
        <h2><a href="https://itp.nyu.edu/camp2018/" target="_blank">ITP Camp</a>, Workshop</h2>
        <h3>Summer 2017, Summer 2016</h3>
      </div>
      <img src={itpcamp} />
    </li>
    <li className={styles.talk}>
      <div>
        <h2><a href="http://codelandconf.com/" target="_blank">Codeland</a>, p5.js Workshop</h2>
        <h3>April 2017</h3>
        <p><a href="https://twitter.com/iam_taqwa/status/855819985624719360" target="_blank">I have fans</a></p>
      </div>
    </li>
    <li className={styles.talk}>
      <div>
        <h2><a href="https://code-art.com/" target="_blank">Code Art Miami</a>, Keynote and Workshop</h2>
        <h3>March 2017</h3>
      </div>
      <img src={miami} />
    </li>
    <li className={styles.talk}>
      <div>
        <h2>Software Sketchbook in p5.js, Workshop</h2>
        <h3>August 2016</h3>
        <p>
          A weekend workshop class introduction to programming in p5.js. In collaboration with Emily Xie.
        </p>
      </div>
    </li>
    <li className={styles.talk}>
      <div>
        <h2><a href="https://pioneerworks.org/programs/art-x-code/" target="_blank">Art x Code</a>, Workshop</h2>
        <h3>July 2016</h3>
        <p>
          A week long class teaching teenage girls about art and code. We taught them
          how to make games in Scratch, introduced them to 3D and Unity, and introduced
          them to virtual reality and Tilt Brush. In collaboration with Pioneer Works
          and Made with Code - Google.
        </p>
        <p>
          <a href="https://technical.ly/brooklyn/2016/07/27/art-x-code-google-pioneer-works-david-sheinkopf/" target="_blank">
            Press
          </a>
        </p>
      </div>
    </li>
    <li className={styles.talk}>
      <div>
        <h2><a href="http://alt-ai.net/" target="_blank">Alt-AI</a>, Visualizing Neural Networks in Virtual Space, Artist Talk</h2>
        <h3>May 2016</h3>
        <p><a href="https://vimeo.com/181211762" target="_blank">Video</a></p>
      </div>
    </li>
    <li className={styles.talk}>
      <div>
        <h2>
          <a href="https://www.facebook.com/events/1528049207489812/" target="_blank">MVR</a>, Talk
        </h2>
        <h3>March 2016</h3>
        <p>A talk about user experience design in virtual reality.</p>
      </div>
    </li>
    <li className={styles.talk}>
      <div>
        <h2>Software for Artists Day, Talk</h2>
        <h3>December 2015</h3>
        <p>Hanging out in the Metaverse. A talk about the history of virtual reality.</p>
      </div>
    </li>
  </ul>
)

export default TalksList
