import React from "react"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/layout/layout"
import "../styles/global.css"
import BlogApp from "../components/blog/BlogApp"

const IndexPage = () => (
  <Layout>
    <Container className="space">
      <BlogApp />
    </Container>
  </Layout>
)


export default IndexPage
