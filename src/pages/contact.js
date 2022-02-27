import * as React from "react"
import Layout from "../components/Layout"
import {graphql} from 'gatsby'
import RecipesList from "../components/RecipesList"

const Contact = ({ data:{allContentfulRecipe:{nodes:recipes}} }) => {
    return (
        <Layout>
            <main className="page">
                <section className="contact-page">

                    <article className="contact-info">
                        <h3>Want To Get In Touch?</h3>
                        <p>Before they sold out bicycle rights shaman messenger bag, glossier gochujang flannel butcher. Ramps helvetica tbh trust fund beard.</p>
                        <p>Aesthetic next level pug mixtape fixie kombucha irony thundercats gentrify stumptown organic succulents tattooed try-hard farm-to-table. </p>
                        <p>You probably haven't heard of them 3 wolf moon skateboard, etsy activated charcoal sustainable brooklyn hashtag green juice adaptogen paleo tbh ennui. Dreamcatcher freegan edison bulb pok pok, leggings biodiesel adaptogen 8-bit stumptown ramps XOXO migas disrupt +1. Brooklyn pickled godard stumptown adaptogen umami DIY, artisan YOLO before they sold out typewriter brunch trust fund vice waistcoat. Shabby chic asymmetrical flexitarian tbh, lumbersexual locavore organic chambray roof party tousled wolf XOXO chartreuse. Neutra whatever swag, single-origin coffee direct trade bicycle rights aesthetic church-key bitters meh umami mixtape. Distillery cornhole la croix, tumblr literally typewriter asymmetrical everyday carry paleo squid seitan lumbersexual.
                        </p>
                    </article>
                    <article>
                        <form className="form contact-form">
                            <div className="form-row">
                                <label htmlFor="name">Your Name</label>
                                <input type="text" name="name" id="name"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="email">Your Email</label>
                                <input type="text" name="email" id="email"/>
                            </div>
                            <div className="form-row">
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message" ></textarea>
                            </div>
                            <button type="submit" className="btn block">Submit</button>
                        </form>
                    </article>
                </section>
                <section className="featured-recipes">
                    <h5>Look at this awesomesauce!</h5>
                    <RecipesList recipes={recipes}/>
               </section>
            </main>
        </Layout>

    )
}

export const query = graphql`
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

export default Contact

