import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`


  return (
    <Layout location={location} title={siteTitle}>
      
      <Seo title="Home" />
      <h1 className="indexBio">
        👋 Hi, I'm{" "}
        <a>
          <Link href="about">Felpix</Link>
        </a>{" "}
        and welcome to my website. Here, you can find my{" "}
        <a>
          <Link href="articles">blog</Link>
        </a>{" "}
        and take a look at a few of my{" "}
        <a>
          <Link href="projects">projects</Link>
        </a>
        .
      </h1>
    </Layout>
  )
}

export default BlogIndex

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
