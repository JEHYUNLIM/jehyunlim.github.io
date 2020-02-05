import React from "react";
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TutorialPageSecond = ({data}) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Page Tutorial Second" />
        <div>
          <h1>My Site's Files</h1>
          <table>
            <thread>
              <tr>
                <th>relativePath</th>
                <th>prettySize</th>
                <th>extension</th>
                <th>birthTime</th>
              </tr>
            </thread>
            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td> {node.relativePath}</td>
                  <td> {node.prettySize}</td>
                  <td> {node.extension}</td>
                  <td> {node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile{
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`

export default TutorialPageSecond;