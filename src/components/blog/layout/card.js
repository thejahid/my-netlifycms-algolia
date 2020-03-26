import React, { Fragment, Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import CardItem from "./carditem"

class Card extends Component {
  render() {

    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return(
        <Fragment>
            {
                posts.map(({ node: post }) => (
                        <CardItem url={post.frontmatter.path} id={post.id} title={post.frontmatter.title} imageUrl={post.frontmatter.image} date={post.frontmatter.date} />
                    )
                )
            }
        </Fragment>  
    )
  }
}

export default () => (
    <StaticQuery
      query={graphql`
          query MyQuery {
              allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
              edges {
                  node {
                  frontmatter {
                      title
                      path
                      date(formatString: "MMMM DD, YYYY")
                      image
                  }
                  id
                }
              }
            }
          }        
      `}
      render={(data, count) => <Card data={data} count={count} />}
    />
  )