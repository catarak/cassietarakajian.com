import React from 'react'
import cycling from '../../assets/cycling.jpg'
import gl from '../../assets/gl2.png'
import p5 from '../../assets/p5js.png'
import lullabies from '../../assets/lullabiesforai.jpg'

import styles from './projectlist.module.css'

const ProjectList = () => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <a href="http://girlfriends.site" target="_blank">
        <img src={gl} />
      </a>
      <div>
        <h2>
          Cofounder, Girlfriends Labs
        </h2>
        <p>
          Girlfriends Labs is a creative agency that specializes
          in websites, apps, installations and emerging techniques.
          We build tools to problem solve and create seamless experiences.
        </p>
      </div>
    </li>
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
      <a href="https://alpha.editor.p5js.org" target="_blank">
        <img src={p5} />
      </a>
      <div>
        <h2>
          Lead Developer, p5.js web editor
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
      <a href="https://twitter.com/lullabiesforai" target="_blank">
        <img src={lullabies} />
      </a>
      <div>
        <h2>
          Band member, Lullabies for AI
        </h2>
        <p>
          Lullabies for AI is a musical project by three weirdos
          (Amelia Winger-Bearskin, Cassie Tarakajian and Eamon O'Connor)
          who worked together at an applied AI lab on Wall Street before
          realizing they should just be a band. 
        </p>
        <p>
          They create music to soothe and educate our future AI overlords
          who need some psychic chill as much as the next neural net.
        </p>
      </div>
    </li>
  </ul>
)

export default ProjectList