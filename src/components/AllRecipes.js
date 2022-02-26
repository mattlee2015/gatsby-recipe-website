import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'

const AllRecipes = () => {
  return (
    <div>
        <h4>AllRecipes Page</h4>
        <TagsList/>
        <RecipesList/>
    </div>
  )
}

export default AllRecipes