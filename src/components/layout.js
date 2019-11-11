import React from "react"
import PropTypes from "prop-types"

import styled from '@emotion/styled'

const Red = styled.div`
  color: red;
`

const Layout = ({ children }) => (<>
  <Red>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </Red>
</>)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
