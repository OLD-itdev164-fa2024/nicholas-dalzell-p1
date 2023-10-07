import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <h3>Welome! This is a helpful tool for bartenders.</h3>
    <h4>Use these recipes to craft your customers the highest quality cocktails.</h4>
    <Link to="/about">About Us</Link>
    <p></p>
    <Link to="/contact">Contact Us</Link>
    <ul className={styles.list}>
      {
        data.allContentfulCocktailRecipe.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.cocktailName}</Link>  
            <div>
              <GatsbyImage 
                image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
        
          </li>
        ))
      }
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{
  allContentfulCocktailRecipe {
    edges {
      node {
        id
        cocktailName
        slug
        heroImage {
          gatsbyImageData
        }
      }
    }
  }
}
`
