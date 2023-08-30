import React from 'react'
import Layout from "../components/layout"
import WorkList from '../components/ProjectList/work'

const WorkProjects = () => (
  <Layout>
    <section className="current-projects">
      <WorkList />
    </section>
  </Layout>
)

export default WorkProjects
