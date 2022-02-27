import React from 'react'
import {Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import slugify from 'slugify'


const RecipesList = ({recipes = []}) => {
  return (
    <div className="recipes-list">{
      recipes.map((recipe)=>{
        const {id, title,image, prepTime, cookTime} = recipe
        const pathToImage = getImage(image)
        const slugify_url = slugify(title,{lower:true})

        return(
          <Link to={`/${slugify_url}`} className="recipe">
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