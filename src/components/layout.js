import * as React from "react"
import { Link } from "gatsby"
import Navbar from "../components/navbar"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath



  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Navbar location={isRootPath} />
      <main className="container">{children}</main>
      <footer>
        Felpix© {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
