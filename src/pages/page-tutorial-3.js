import React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TutorialPageFirst = ({data}) => {
  console.log(data)
  return (
    <Layout>
      <SEO title="Page Tutorial Third" />
        <div>
          <h1>
            Post with Markdown
          </h1>
          <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              {node.frontmatter.title}{" "}
              - {node.frontmatter.date}
              <p>{node.excerpt}</p>
            </div>
          ))}
          <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query{
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default TutorialPageFirst;