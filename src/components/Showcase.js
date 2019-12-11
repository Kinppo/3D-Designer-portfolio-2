import React from "react"
import "./Showcase.scss"
import vector from "../images/vector.svg"

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase-text">
        <h2>My Passion Is 3D Modeling ...</h2>
        <h3>Welcome To My Website</h3>
      </div>
      <img src={vector} alt="vector" />
    </div>
  )
}

export default Showcase
