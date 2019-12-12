import React from "react"
import SEO from "../components/seo"
import Img from "../components/Projects"
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./index.scss"
import Showcase from "../components/Showcase"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <main>
      <Header />
      <Showcase />
    </main>
    <h3 className="projects-heading">Here Are Some Projects I've Worked On</h3>
    <Img />
    <svg viewBox="0 0 1695 57" className="svg-path">
      <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1c183.6-.1 344.5 7.3 482.8 22v34H0V23z"></path>
    </svg>
    <Footer />
  </div>
)

export default IndexPage
