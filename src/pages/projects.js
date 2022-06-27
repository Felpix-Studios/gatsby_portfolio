import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const Project = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <h1 className="pageTitle">🎓 Projects</h1>
      <p className="pageTitle">
        Here's a grid of some of my favorite projects. If you want more, go to my GitHub!
      </p>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`