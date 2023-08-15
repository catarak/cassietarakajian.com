import React from 'react'
import Layout from "../components/layout"
import TalksList from '../components/TalksList'

const Talks = () => (
  <Layout>
    <section className="talks-and-workshops">
      <TalksList />
    </section>
  </Layout>
)

export default Talks
