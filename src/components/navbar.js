import * as React from "react"
import { Link } from "gatsby"

const Navbar = (location) => {
  console.log(location.location)
  let titleStyle = {
    color: "#0EA5A0",
  }

  if(location.location===false){
    return (
      <nav>
        <Link href="/" className="active" id="title" style={titleStyle}>
          Felpix
        </Link>
        <div className="nav-right">
          <Link href="projects">Projects</Link>
          <Link href="articles">Articles</Link>
          <Link href="about">About</Link>
        </div>
      </nav>
    )
  }else{
    return (
      <nav>
        <Link href="/" className="active" id="title">
          Felpix
        </Link>
        <div className="nav-right">
          <Link href="projects">Projects</Link>
          <Link href="articles">Articles</Link>
          <Link href="about">About</Link>
        </div>
      </nav>
    )
  }
  
}

export default Navbar
