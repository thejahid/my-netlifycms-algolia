const pageQuery = `{
    docs: allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/" },
      }
     ) {
        edges {
            node {
                frontmatter {
                title
                path
                }
                excerpt(pruneLength: 5000)
            }
        }
     }
    }`
    const flatten = arr =>
      arr.map(({ node: { frontmatter, ...rest } }) => ({
      ...frontmatter,
      ...rest,
    }))
    const settings = { attributesToSnippet: [`excerpt:20`] }
    const queries = [{
      query: pageQuery,
      transformer: ({ data }) => flatten(data.docs.edges),
      indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
      settings,
    }]
    module.exports = queries