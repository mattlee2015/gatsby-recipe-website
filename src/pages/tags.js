import * as React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import setupTags from "../util/setupTags"
import slugify from "slugify"


const Tags = ({data}) => {

    const newTags = setupTags(data.allContentfulRecipe.nodes)

    return (
        <Layout>
            <main className="page">
                <section className="tags-page">
                    {newTags.map((tag, index) =>{
                        const [text, value] = tag
                        const slug = slugify(text, {lower:true})
                        return (
                            <Link to={`/tags/${slug}`} key={index} className="tag">
                                <h5>{text}</h5>
                                <p>{value} recipe(s)</p>
                            </Link>
                        )
                    })}
                </section>
            </main>
        </Layout>

    )
}

export default Tags


export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
