import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const RecipesList = ({recipes = []}) => {
  return (
    <div className="recipes-list">{
      recipes.map((recipe)=>{
        const {id, title,image, prepTime, cookTime} = recipe
        const pathToImage = getImage(image)
        return(
          <Link to={`/${title}`} className="recipe">
            <GatsbyImage image={pathToImage} className="recipe-img" alt={title}/>
            <h5>{title}</h5>
            <p>Prep: {prepTime} mins | Cook: {cookTime} mins</p>
          </Link>
        )
      })  
    }</div>
  )
}

export default RecipesList