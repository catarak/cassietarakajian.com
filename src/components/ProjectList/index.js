import React from 'react'
import cycling from '../../assets/cycling.jpg'
import p5 from '../../assets/p5js.png'
import itp from '../../assets/itp.png'
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

import * as styles from './projectlist.module.css'

const ProjectList = () => (
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
    <li className={styles.item}>
      <a href="https://medium.com/dbrs-innovation-labs/visualizing-neural-networks-in-virtual-space-7e3f62f7177" target="_blank" rel="noreferrer">
        <img src={aiml} />
      </a>
      <div>
        <h2>Visualizing Neural Networks in Virtual Space</h2>
        <p>
          As a resident at DBRS Innovation Labs, I worked on a Virtual Reality
          experience to explain one approach to machine learning. I wanted
          to give a picture of its internal workings, so that visitors could walk
          away with an intuitive understanding of how learning networks operate.
        </p>
        <p>
          The project works with a convolutional neural network called LeNet,
          modeled after the visual cortex of a cat. Users are able to draw numbers
          with their hands, tracked by a Leap Motion sensor, and watch the algorithm
          analyze their writing in real time. Users can view the neural network from
          different angles and change the view to see all of the network's layers
          at once.
        </p>
        <p>
          <a href="https://vimeo.com/176877062" target="_blank" rel="noreferrer">
            Demo Video
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://vimeo.com/181211762" target="_blank" rel="noreferrer">
            Artist Talk
          </a>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="http://wikison.net" target="_blank" rel="noreferrer">
        <img src={wikisonnet} />
      </a>
      <div>
        <h2>Wikisonnet</h2>
        <p>
          Wikisonnet is an algorithmic poem generator. It grew out of our interest
          in computational writing, and an experiment to see if we could write poems
          automatically using English language Wikipedia. The algorithm pulls together
          lines from Wikipedia in iambic pentameter and arranges them into Elizabethan
          sonnets.
        </p>
        <p>
          <a href="https://twitter.com/wikisonnet" target="_blank" rel="noreferrer">
            Twitter Bot
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://vimeo.com/151667460" target="_blank" rel="noreferrer">
            Demo Video
          </a>
          <span className={styles.separator}>/</span>
          <a href="https://observer.com/2016/11/wikisonnet" target="_blank" rel="noreferrer">
            Press
          </a>
        </p>
      </div>
    </li>
        <li className={styles.item}>
      <a href="https://twitter.com/lullabiesforai" target="_blank" rel="noreferrer">
        <img src={lullabies} />
      </a>
      <div>
        <h2>
          Band member, <a href="https://twitter.com/lullabiesforai" target="_blank" rel="noreferrer">Lullabies for AI</a>
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
    <li className={styles.item}>
      <a href="https://github.com/Cycling74/miraweb" target="_blank" rel="noreferrer">
        <img src={miraweb} />
      </a>
      <div>
        <h2><a href="https://github.com/Cycling74/miraweb" target="_blank" rel="noreferrer">Miraweb and Xebra.js</a>, Contributor</h2>
        <p>
          Miraweb provides a responsive, websocket-based portal into your Max/MSP patch
          from any compatible browser. Xebra.js is a JavaScript client library for
          communication with a Max patch, allowing users to create event-based custom
          web interfaces for Max. 
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://vimeo.com/153171285" target="_blank" rel="noreferrer">
        <img src={vr} />
      </a>
      <div>
        <h2><a href="https://vimeo.com/153171285" target="_blank" rel="noreferrer">Without Colors</a>, VR Experience</h2>
        <p>
          "Without Colors" is inspired by the Italo Calvino short story of the same name.
          In this experience, the player is placed on the Earth before the atmosphere
          had formed, and therefore lacked both color and sound. It is a lonely place,
          difficult to find and connect with other humans. It is repetitive and gray, ad infinitum.
        </p>
        <p>
          Completed while in residence at Pioneer Works.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="http://skin.flu.me" target="_blank" rel="noreferrer">
        <img src={flume} />
      </a>
      <div>
        <h2><a href="http://skin.flu.me" target="_blank" rel="noreferrer">Flume Soundboard for Skin</a></h2>
        <p>
          For the release of Flume’s latest album Skin, I built&nbsp;
          <a href="http://skin.flu.me" target="_blank" rel="noreferrer">skin.flu.me</a>, an
          interactive soundboard, in collaboration with Seth Kranzler.
          Visitors recreate "Never Be Like You" by triggering samples from the
          track to accompany an instrumental loop of the chorus. We created a
          clean and responsive user experience which&nbsp;
          <a href="https://twitter.com/flumemusic/status/740956765500510208" target="_blank" rel="noreferrer">Flume himself also enjoyed</a>.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="http://104.236.254.218:8081/" target="_blank" rel="noreferrer">
        <img src={dividend} />
      </a>
      <div>
        <h2>Dividend Plus, a Cryptocurrency</h2>
        <p>
          In collaboration with <a href="http://vilmagold.com/artist/hannah-sawtell/" target="_blank" rel="noreferrer">Hannah Sawtell</a>,
          Dividend Plus is a "people's currency" modelled on alternative cryptocurrencies like Bitcoin
          created for Art Sheffield 2016. The project also includes an interactive freestanding dual-screen CGI animation,
          in which Dividend coins tumble down, triggered every time a transaction takes place.
        </p>
        <p>
          Press:&nbsp;
          <a href="https://frieze.com/article/art-sheffield-2016" target="_blank" rel="noreferrer">Frieze</a>
          <span className={styles.separator}>/</span>
          <a href="www.bbc.co.uk/news/av/entertainment-arts-36090316/art-sheffield-hannah-sawtell-at-site-gallery" target="blank">BBC</a>
          <span className={styles.separator}>/</span>
          <a href="https://www.artmonthly.co.uk/magazine/site/issue/june-2016" target="_blank" rel="noreferrer">Art Monthly</a>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://vimeo.com/154739661" target="_blank" rel="noreferrer">
        <img src={mansplain} />
      </a>
      <div>
        <h2><a href="https://vimeo.com/154739661" target="_blank" rel="noreferrer">Mansplain it to me</a></h2>
        <p>
          Mainsplain it to me is a web application that will answer a question in a condescending manner to you.
          Currently not working at <a href="http://mansplainitto.me" target="_blank" rel="noreferrer">mansplainitto.me</a>.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://www.youtube.com/watch?v=l0u-swKYIxw" target="_blank" rel="noreferrer">
        <img src={holdr} />
      </a>
      <div>
        <h2><a href="https://www.youtube.com/watch?v=l0u-swKYIxw" target="_blank" rel="noreferrer">Holdr</a></h2>
        <p>An app that tells you whether or not you are holding your phone.</p>
      </div>
    </li>
    <li className={styles.item}>
      <img src={skatroom} />
      <div>
        <h2>Skatroom</h2>
        <p>
          A web enabled bathroom experience. Talk to other people on their phones in the
          bathroom in an online chatroom. For Art Hack Day, Deluge, January 2015.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <img src={corporate} />
      <div>
        <h2>Corporate Synergy</h2>
        <p>
          An algorithmic performance in with interactive audience participation, though it is unclear
          how their actions affect the piece. The performance itself is under a license called Crowd
          Heading, in which the FANG corporations own the work. For Art Hack Day, Per Capita, September 2016.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <img src={soylent} />
      <div>
        <h2>Soylent for Women</h2>
        <p>
          It's pink and it's twice the price. 
        </p>
      </div>
    </li>
  </ul>
)

export default ProjectList