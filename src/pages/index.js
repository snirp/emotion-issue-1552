import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Seo from "../components/Seo"

const Big = styled.div`
  font-size: 3rem;
`

const Index = () => (
  <>
    <Seo title="Home" />
    <Big>Hi people</Big>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page/">Go to page 2</Link>
  </>
)

export default Index
