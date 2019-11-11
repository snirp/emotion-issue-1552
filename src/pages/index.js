import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import SEO from "../components/seo"

const Big = styled.div`
  font-size: 3rem;
`

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Big>Hi people</Big>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
