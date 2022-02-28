import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import { BsClockHistory, BsClock, BsPeople} from 'react-icons/bs'
import RecipesList from '../components/RecipesList'
import slugify from 'slugify'


const RecipeTemplate = ({data}) => {
    
    const recipes = data.allContentfulRecipe.nodes
    const {title, cookTime, content, prepTime, description:{description}, servings, image} = data.contentfulRecipe
    //console.log(data.contentfulRecipe)
    const pathToImage = getImage(image)
    const {tags, tools, ingredients, instructions} = content
  return (
      <Layout>
        <main className='page'>
            <div className='recipe-page'>
                {/* hero */}
                <section className='recipe-hero'>
                    <GatsbyImage image={pathToImage} alt={title} className="about-img"/> 
                    <article className='recipe-info'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className='recipe-icons'>
                            <article>
                                <BsClock/>
                                <p>Prep Time: {prepTime} min(s)</p>
                            </article>
                             <article>
                                <BsClockHistory/>
                                <p>Cook Time: {cookTime} min(s)</p>
                            </article>
                             <article>
                                <BsPeople/>
                                <p>Servings: {servings} people</p>
                            </article>

                        </div>
                        <p className='recipe-tags'>
                            Tags : {tags.map((tag, index)=>{
                                const slug = slugify(tag, {lower:true})
                                return (
                                    <Link to={`/tags/${slug}`} key={index}>
                                        {tag}
                                    </Link>
                                )
                            })}
                        </p>
                    </article>
                </section>
                {/* rest of the content */}
                <section className="recipe-content">
                    <article>
                        <h4>Instructions</h4>
                        {
                            instructions.map((item, index)=>{
                                return(
                                    <div key={index} className="single-instruction">
                                        <header>
                                            <p>Step {index +1} </p>
                                            <div></div>
                                        </header>
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </article>
                    <article className='second-column'>
                        <div>
                            <h4>Ingredients</h4>
                            {ingredients.map((item,index)=>{
                                return(
                                    <p key={index} className="single-ingredient">
                                        {item}
                                    </p>
                                )
                            })}
                        </div>
                        <div>
                            <h4>Tools</h4>
                            {tools.map((item,index)=>{
                                return(
                                    <p key={index} className="single-tool">
                                        {item}
                                    </p>
                                )
                            })}
                        </div>
                    </article>
                </section>
            </div>
            <section className="featured-recipes">
                    <h5>Find our featured recipes of the day here!</h5>
                    <RecipesList recipes={recipes}/>
            </section>
        </main>
        
      </Layout>
  )
}


export const query = graphql`
query getSingleRecipe($title: String) {
  contentfulRecipe(title: {eq: $title}) {
    title
    cookTime
    prepTime
    servings
    description {
      description
    }
    content {
      ingredients
      instructions
      tools
      tags
    }
    image {
      gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
    }
  }

  allContentfulRecipe(sort: {order: ASC, fields: title} filter: {featured: {eq: true}}) {
      nodes {
        id
        cookTime
        prepTime
        title
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
}
`

export default RecipeTemplate

