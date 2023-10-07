import React from 'react';
import { graphql,Link } from 'gatsby';
import Layout from '../components/layout';

const CocktailRecipe = ({ data }) => {
    const { cocktailName, ingredients, description, origin, buildingTheDrink } = data.contentfulCocktailRecipe;

    return (
        <Layout>
            <Link to="/">Home</Link>
            <p></p>
            <h1>{cocktailName}</h1>
            <div dangerouslySetInnerHTML={{__html: description.childMarkdownRemark.html}}></div>
            <div dangerouslySetInnerHTML={{__html: origin.childMarkdownRemark.html}}></div>
            <div dangerouslySetInnerHTML={{__html: buildingTheDrink.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default CocktailRecipe;

export const pageQuery = graphql`
query cocktailRecipeQuery($slug: String!) {
  contentfulCocktailRecipe(slug: {eq: $slug}) {
    cocktailName
    slug
    description {
      childMarkdownRemark {
        html
      }
    }
    origin {
      childMarkdownRemark {
        html
      }
    }
    ingredients
    buildingTheDrink {
      childMarkdownRemark {
        html
      }
    }
  }
}
`