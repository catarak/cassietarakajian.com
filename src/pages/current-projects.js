import React from 'react'
import Layout from "../components/layout"
import ProjectList from '../components/ProjectList'

const CurrentProjects = () => (
  <Layout>
    <section className="current-projects">
      <ProjectList />
    </section>
  </Layout>
)

export default CurrentProjects
