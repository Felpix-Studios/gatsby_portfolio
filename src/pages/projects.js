import * as React from "react"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import {Globe, GitBranch} from "phosphor-react"  

const Project = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <h1 className="pageTitle">🛠️ Projects</h1>
      <p className="pageTitle">
        Here's a grid of some of my favorite projects. If you want more, go to
        my GitHub!
      </p>
      <div className="projectContainer">
        <div class="project fancyhover">
          <h3>
            ⌨️{" "}
            <a href="https://felpix-studios.github.io/typetimerweb/">
              TypeTimer
            </a>
          </h3>
          <p>
            A fun game based on TypeRacer. The app is made with MongoDB,
            Express, React, and Chakra UI. It uses the Socket.io library to
            support multiplayer.
          </p>
        </div>
        <div className="project fancyhover">
          <h3>
            🏠{" "}
            <a href="https://nnjdsa.gitlab.io/nnjdsalandlordfinder/">
              Find My Landlord
            </a>{" "}
            (WIP)
          </h3>
          <p>
            A free service for renters provided by the New Jersey Democratic
            Socialists of America. I worked on the frontend MapBox API
            component, the backend database management, and the data collection
            from public tax records.
          </p>
        </div>
        <div className="project fancyhover">
          <h3>
            👨‍💻 <a href="https://ridgehacks.us">RidgeHacks</a>
          </h3>
          <p>
            The website for RidgeHacks 2022, my high school's hackathon (which I
            also organized). It's made with Gatsby.
          </p>
        </div>
        <div className="project fancyhover">
          <h3>
            🗺️{" "}
            <a href="https://replit.com/@KevinL42/Pathfinding-Final#Main.java">
              Pathfinder
            </a>
          </h3>
          <p>
            A final project made for my High School CS class. It's a GUI for
            pathfinding algorithms like A*, BFS, and DFS made in Java.
          </p>
        </div>
      </div>
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