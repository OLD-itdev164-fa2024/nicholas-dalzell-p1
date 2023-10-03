import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home"/>
            <h1>About us</h1>
            <p>{`The ${company} was founded in 1986. Its' purpose is to provide bartenders and waitstaff with benefits and information that will enhance their lives and advance their careers.`}</p>
            <div style={{maxWidth: `400px`, marginBottom: `1.5rem`}}>
            <StaticImage
                src="../images/aboutpicture.jpg"
                width={400}
                quality={100}
                formats={["auto", "webp", "avif"]}
                alt="Picture of a bar"
                style={{ marginBottom: `1.5rem`}}
            />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About
export const query = graphql`
query {
    site {
      siteMetadata {
        contact {
          name
          company
        }
      }
    }
  }
`