import * as React from "react"
import { fas } from "@fortawesome/free-regular-svg-icons"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath



  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navbar location={isRootPath} />
      <main className="container">
        {children}
        <footer>
          <p>
            Felpix© {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a> | <a href="mailto: hi@felpix.com" target="new">hi@felpix.com</a> | <a href="https://github.com/Felpix-Studios" target="new">Felpix-Studios</a> on Github | <a href="https://twitter.com/FelpixTheMaker" target="new">@FelpixTheMaker</a> on Twitter
          </p>
        </footer>
      </main>
    </div>
  )
}

export default Layout
