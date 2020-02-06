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
            <Link
              to={node.fields.slug}
            >
              <h3>{node.frontmatter.title}{" "}
                <span>
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          ))}
          <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default TutorialPageFirst;