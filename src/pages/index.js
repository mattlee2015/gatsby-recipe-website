import * as React from "react"
import {StaticImage} from 'gatsby-plugin-image'
import Layout from "../components/Layout"
import AllRecipes from "../components/AllRecipes"


// markup
const Index = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
          src="../assets/images/main.jpeg"
          alt="flour and eggs"
          className="hero-img"
          placeholder="tracedSVG"
          layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple Recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>

        </header>
        <AllRecipes/>
      </main>
    </Layout>
  )
}



export default Index

