import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import SEO from "../components/seo"

const Big = styled.div`
  font-size: 3rem;
`

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <Big>Hi from the second page</Big>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
