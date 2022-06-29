import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const politicsArticles = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Politics Posts" />
        <h1 className="pageTitle">🏛️ Politics</h1>
        <p className="pageTitle">
          I write pieces on interesting topics or events. Hopefully, you find
          some use out of them.
        </p>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Politics Posts" />
      <h1> className="pageTitle"🏛️ Politics</h1>
      <p className="pageTitle">
        I write pieces on interesting topics or events. Hopefully, you find some
        use out of them.
      </p>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          console.log(post)
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <p>
                    <span className="category">
                      {post.frontmatter.category}
                    </span>{" "}
                    | {post.frontmatter.date}
                  </p>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default politicsArticles

// Make a graphql query for all the posts in the tech category
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "Politics" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          category
          description
        }
      }
    }
  }
`
