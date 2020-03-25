import React, { Fragment} from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
        {children}
      <Footer />
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
