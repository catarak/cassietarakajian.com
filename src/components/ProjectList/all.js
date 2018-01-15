import React from 'react'
import aiml from '../../assets/viz1.gif'
import wikisonnet from '../../assets/wikisonnet_still.png'
import miraweb from '../../assets/mira2.jpg'
import vr from '../../assets/vr.png'
import syria from '../../assets/syria.png'
import flume from '../../assets/flume1.png'
import dividend from '../../assets/dividend.png'
import mansplain from '../../assets/mansplain.png'
import styles from './projectlist.module.css'

const AllProjectList = () => (
  <ul className={styles.items}>
    <li className={styles.item}>
      <a href="https://medium.com/dbrs-innovation-labs/visualizing-neural-networks-in-virtual-space-7e3f62f7177" target="_blank">
        <img src={aiml} />
      </a>
      <div>
        <h2>Visualizing Neural Networks in Virtual Space</h2>
        <p>
          As a resident at DBRS Innovation Labs, I worked on a Virtual Reality
          experience to explain one approach to machine learning. Mathematical
          descriptions of neural networks are precise but abstract. I wanted
          to give a picture of its internal workings, so that visitors could walk
          away with an intuitive understanding of how learning networks operate.
        </p>
        <p>
          The project works with a convolutional neural network called LeNet,
          modeled after the visual cortex of a cat. Users are able to draw numbers
          with their hands, tracked by a Leap Motion sensor, and watch the algorithm
          analyze their writing in real time. Users can view the neural network from
          different angles and change the view to see all of the network's layers
          at once or zoom in on a specific layer.
        </p>
        <p>
          <a href="https://vimeo.com/176877062" target="_blank">
            Demo Video
          </a>
          <span>/</span>
          <a href="https://vimeo.com/181211762" target="_blank">
            Artist Talk
          </a>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="wikison.net" target="_blank">
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
          <a href="https://twitter.com/wikisonnet" target="_blank">
            Twitter Bot
          </a>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://github.com/Cycling74/miraweb" target="_blank">
        <img src={miraweb} />
      </a>
      <div>
        <h2>Miraweb and Xebra.js, Contributor</h2>
        <p>
          Miraweb provides a responsive, websocket-based portal into your Max/MSP patch
          from any compatible browser. Xebra.js is a JavaScript client library for
          communication with a Max patch, allowing users to create event-based custom
          web interfaces for Max. 
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://vimeo.com/153171285" target="_blank">
        <img src={vr} />
      </a>
      <div>
        <h2>Without Colors, VR Experience</h2>
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
      <a href="http://skin.flu.me" target="_blank">
        <img src={flume} />
      </a>
      <div>
        <h2>Flume Soundboard for Skin</h2>
        <p>
          For the release of Flume’s latest album Skin, I built&nbsp;
          <a href="http://skin.flu.me" target="_blank">skin.flu.me</a>, an
          interactive soundboard, in collaboration with&nbsp;
          <a href="http://sethkranzler.com/" target="_blank">Seth Kranzler</a>.
          Visitors recreate "Never Be Like You" by triggering samples from the
          track to accompany an instrumental loop of the chorus. We created a
          clean and responsive user experience which&nbsp;
          <a href="https://twitter.com/flumemusic/status/740956765500510208" target="_blank">Flume himself also enjoyed</a>.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://vimeo.com/149468982" target="_blank">
        <img src={syria} />
      </a>
      <div>
        <h2>The Syrian Journey, VR Experience</h2>
        <p>
          A virtual reality experience created in Unity for Google Cardboard.
          It follows the journey from the first-person perspective of a Syrian
          refugee, traveling on an inflatable plastic boat from Turkey to Greece.
          Before the boat reaches Greece, however, they encounter a Greek boat.
          This is the recreation of a real life experience, which can be found&nbsp;
          <a href="https://www.facebook.com/NowThisNews/videos/947886341968157/?pnref=story" target="_blank">here</a>.
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="http://104.236.254.218:8081/" target="_blank">
        <img src={dividend} />
      </a>
      <div>
        <h2>Dividend Plus, a Cryptocurrency</h2>
        <p>
          In collaboration with <a href="http://vilmagold.com/artist/hannah-sawtell/" target="_blank">Hannah Sawtell</a>,
          Dividend Plus is a "people's currency" modelled on alternative cryptocurrencies like Bitcoin
          created for Art Sheffield 2016. The project also includes an interactive freestanding dual-screen CGI animation,
          in which Dividend coins tumble down, triggered every time a transaction takes place.
        </p>
        <p>
          Press:&nbsp;
          <a href="https://frieze.com/article/art-sheffield-2016" target="_blank">Frieze</a>
          <span className={styles.separator}>/</span>
          <a href="www.bbc.co.uk/news/av/entertainment-arts-36090316/art-sheffield-hannah-sawtell-at-site-gallery" target="blank">BBC</a>
          <span className={styles.separator}>/</span>
          <a href="https://www.artmonthly.co.uk/magazine/site/issue/june-2016" target="_blank">Art Monthly</a>
        </p>
      </div>
    </li>
    <li className={styles.item}>
      <a href="https://vimeo.com/154739661" target="_blank">
        <img src={mansplain} />
      </a>
      <div>
        <h2>Mansplain it to me</h2>
        <p>
          Mainsplain it to me is a web application that will answer a question in a condescening manner to you.
          Currently not working at <a href="http://mansplainitto.me" target="_blank">mansplainitto.me</a>.
        </p>
      </div>
    </li>
  </ul>
)

export default AllProjectList
