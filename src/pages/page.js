import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'

import Seo from "../components/Seo"

const Big = styled.div`
  font-size: 3rem;
`

const Page = () => (
  <div>
    <Seo title="Page two" />
    <Big>Hi from the second page</Big>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Page
