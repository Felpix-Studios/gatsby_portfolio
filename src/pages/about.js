import * as React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const about = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About Me" />
      <h1 className="pageTitle">🎓 About</h1>
      <p className="pageTitle">
        I'm a full time student and part time developer. Oh, and there's some
        other stuff too.
      </p>
      <h3>What I'm Working On</h3>
      <ol>
        <li>
          🕸️ If the world is an oyster, the web is my playground. I don't like
          anything from the sea anyways... You can find some of my programming
          projects <Link href="../projects">here</Link>, or dive through the
          depths of my{" "}
          <a target="new" href="https://github.com/Felpix-Studios">
            GitHub {""}
          </a>{" "}
          account to find more.
        </li>
        <li>
          🎙️ I write and host a{" "}
          <a
            target="new"
            href="https://open.spotify.com/show/2bed9WR02ETBQE9ZwfwNvQ"
          >
            podcast
          </a>{" "}
          for{" "}
          <a target="new" href="https://extempers.org/">
            The Extemper's Bible
          </a>
          . We aim to offer the best free resource for people entering the world
          of Speech & Debate.
        </li>
        <li>
          ✍️ Right here, I write articles on life, tech, and politics. It's a
          bit infrequent, but another way to get the creative juices flowing.
        </li>
      </ol>
      <h3>Other</h3>
      <ol>
        <li>
          🎬 I'm in the process of working on a YouTube channel. It features
          video essays on similar topics to the blog posts here.
        </li>
        <li>
          🎹 I enjoy playing the piano, guitar, and clarinet. All for fun of
          course, I'm really terrible at all of them...
        </li>
      </ol>
      <h3>Get in Touch</h3>
      <ol>
        <li>
          📨 If you haven't seen the footer yet,{" "}
          <a href="mailto: hi@felpix.com" target="new">
            email
          </a>{" "}
          and{" "}
          <a target="new" href="https://twitter.com/FelpixTheMaker">
            Twitter
          </a>{" "}
          are the best ways to reach me.
        </li>
      </ol>
    </Layout>
  )
}

export default about

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
