import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Video from "./Video.js"
import "./Projects.scss"

const Image = () => {
  const [projectType] = useState([
    "Video Editing",
    "3D Modeling",
    "Video Editing",
    "3D Modeling",
    "Video Editing",
    "3D Modeling",
    "Video Editing",
  ])
  const [projectTitle] = useState([
    "Converting 2D image to a 3D modele",
    "Converting 2D image to a 3D modele",
    "Converting 2D image to a 3D modele",
    "Converting 2D image to a 3D modele",
    "Converting 2D image to a 3D modele",
    "Converting 2D image to a 3D modele",
    "Converting 2D image to a 3D modele",
  ])

  const [links] = useState([
    "https://www.youtube.com/embed/GBQ3OwxoOzo",
    "https://www.youtube.com/embed/vbXV5joa1gc",
    "https://www.youtube.com/embed/tzU3rII8tyg",
    "https://www.youtube.com/embed/b9YDScOsRQo",
    "https://www.youtube.com/embed/vJ4dfKTEKsA",
    "https://www.youtube.com/embed/UxvAnTbiw6E",
    "https://www.youtube.com/embed/7KrNGNvqoZc",
  ])
  const [videoState, setVideo] = useState("")
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          relativeDirectory: { eq: "work" }
        }
      ) {
        nodes {
          id
          childImageSharp {
            fixed(quality: 100, width: 480, height: 320) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)
  return (
    <div className="cards-container">
      {data.allFile.nodes.map(image => (
        <div
          className="card"
          key={image.id}
          data-sal="slide-up"
          data-sal-duration="800"
          data-sal-delay="300"
          data-sal-easing="ease-in-out"
        >
          <Img
            fixed={image.childImageSharp.fixed}
            alt="work screenshot"
            className="card-img"
          />
          <div className="card-info">
            <h6>
              {
                projectType[
                  image.childImageSharp.fixed.src
                    .split(/.jpe?g/)
                    .join("")
                    .slice(-1)
                ]
              }
            </h6>
            <h5>
              {
                projectTitle[
                  image.childImageSharp.fixed.src
                    .split(/.jpe?g/)
                    .join("")
                    .slice(-1)
                ]
              }
            </h5>
            <p>
              This project began as my personal research project into computer
              animation in 2016. The aim was to construct a virtual recreation
              of the main city complex of the ancient Egyptian city of
              Akhetaten, for use within a documentary style animation. The 3d
              model was to be constructed within Autodesk 3d Studio Max and all
              the non procedural textures were created or manipulated within
              Adobe Photoshop. The whole model was constructed over a 2 month
              full-time period.
            </p>
            <button
              className="see-more"
              onClick={() =>
                setVideo(
                  links[
                    image.childImageSharp.fixed.src
                      .split(/.jpe?g/)
                      .join("")
                      .slice(-1)
                  ]
                )
              }
            >
              SEE MORE
            </button>
          </div>
        </div>
      ))}
      <Video video={videoState} setVideo={setVideo} />
    </div>
  )
}

export default Image
