import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const TutorialPageFirst = () => {
  return (
    <Layout>
      <SEO title="Page Tutorial First" />
        <div style={{color:`purple`}}>
          <h1>Hello Jonathan!</h1>
          <p>What a Tutorial</p>
          <br />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7Sci-JQnfv8dnPZduw7G79_8im5xCrRNAGA1QKeMKkL_RpbO2g&s" alt="" />
          <br />
          <Link to="/">Go back to the homepage</Link>
        </div>
    </Layout>
  )
}

export default TutorialPageFirst;