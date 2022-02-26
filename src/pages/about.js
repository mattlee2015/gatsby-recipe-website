import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
    return (
        <Layout pageTitle className= "About Me">
           <main className = "page">
               <section className = "about-page">
                   <article>
                       <h2>I'm baby coloring book poke taxidermy</h2>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat scelerisque varius morbi enim nunc.</p>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                       <Link to="/contact" className="btn">Contact</Link>

                   </article>
                   <StaticImage 
                   src="../assets/images/about.jpeg"
                   alt="Pouring salt into bowl"
                   className="about-img"
                   placeholder="blurred"/>
               </section>
           </main>
        </Layout>

    )
}

export default About

