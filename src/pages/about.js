import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link,graphql, useStaticQuery } from "gatsby"
import RecipesList from "../components/RecipesList"

const About = () => {
    const data = useStaticQuery(query)
    const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout pageTitle className= "About Me">
           <main className = "page">
               <section className = "about-page">
                   <article>
                       <h2>I'm baby coloring book poke taxidermy</h2>
                       <p>Pok pok ethical hashtag plaid, fam pour-over banjo hammock XOXO. Literally vexillologist narwhal humblebrag yuccie intelligentsia blue bottle.</p>
                       <p>Butcher VHS blog quinoa organic, shoreditch YOLO irony drinking vinegar microdosing. </p>
                       <Link to="/contact" className="btn">Contact</Link>

                   </article>
                   <StaticImage 
                   src="../assets/images/about.jpeg"
                   alt="Pouring salt into bowl"
                   className="about-img"
                   placeholder="blurred"/>
               </section>
               <br></br>
               <section className="featured-recipes">
                    <h5>Look at this awesomesauce!</h5>
                    <RecipesList recipes={recipes}/>
               </section>
           </main>
        </Layout>

    )
}

const query = graphql`
  {
    allContentfulRecipe(
      sort: {order: ASC, fields: title}
      filter: {featured: {eq: true}}
    ) {
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


export default About

