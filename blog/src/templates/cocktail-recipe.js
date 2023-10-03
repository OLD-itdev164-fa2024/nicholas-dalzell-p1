import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const CocktailRecipe = ({ data }) => {
    const { cocktailName } = data.contentfulCocktailRecipe;

    return (
        <Layout>
            <h1>{cocktailName}</h1>
        </Layout>
    );
}

export default CocktailRecipe;

export const pageQuery = graphql`
    query cocktailRecipeQuery($slug: String!) {
        contentfulCocktailRecipe(slug: {eq: $slug}) {
            cocktailName
            slug
        }
    }
`