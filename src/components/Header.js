import React from "react"
import "./Header.scss"

const Header = () => {
  return (
    <nav>
      <span className="nav-left">Mohammed Amaou</span>
      <div className="nav-right">
        <span>
          <a href="https://www.freelancer.com/dashboard">Freelancer</a>
        </span>
        <span>
          <a href="https://www.youtube.com">Youtube</a>
        </span>
      </div>
    </nav>
  )
}

export default Header
