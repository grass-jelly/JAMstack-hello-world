import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to my new Gatsby site.</p>
    <p>Just starting my journey as a self-learner and developer...</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
