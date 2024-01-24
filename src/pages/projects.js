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
      <p className="pageTitle">Things I've made.</p>
      <div className="projectContainer">
        <div class="project fancyhover">
          <h3>
            
            <a href="https://felpix-studios.github.io/typetimerweb/">
              TypeTimer
            </a>
          </h3>
          <p>Typeracer clone.</p>
        </div>
        <div className="project fancyhover">
          <h3>

            <a href="https://nnjdsa.gitlab.io/nnjdsalandlordfinder/">
              Find My Landlord
            </a>{" "}
            (WIP)
          </h3>
          <p>Find your landlord and see if they're a slumlord.</p>
        </div>
        <div className="project fancyhover">
          <h3>
             <a href="https://ridgecompsci.club/">RCSClub</a>
          </h3>
          <p>High school club.</p>
        </div>
        <div className="project fancyhover">
          <h3>
            <a href="https://coderssb.com/">Coders SB</a>
          </h3>
          <p>University club.</p>
        </div>
        <div className="project fancyhover">
          <h3>
            
            <a href="https://imtootiredtoplanavacationfor.us//">
              imtootiredtoplanavacationforus
            </a>
          </h3>
          <p>The name.</p>
        </div>
        <div className="project fancyhover">
          <h3>
            
            <a href="https://replit.com/@KevinL42/Pathfinding-Final#Main.java">
              Pathfinder
            </a>
          </h3>
          <p>Algorithms.</p>
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