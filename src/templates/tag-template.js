import React from 'react'
import { graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Layout from '../components/Layout'


const tagTemplate = ({data, pageContext}) => {
  const recipes = data.allContentfulRecipe.nodes
  
  return (
      <Layout>
        <main className='page'>
          <h4>{pageContext.tag}</h4>
          <div className='tag-recipes'>
            <RecipesList recipes={recipes}/>
          </div>
        </main>
      </Layout>
  )
}

export const query = graphql`
  query getRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        title
        id
        prepTime
        cookTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default tagTemplate