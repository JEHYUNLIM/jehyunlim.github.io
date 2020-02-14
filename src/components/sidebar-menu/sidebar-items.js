import React from "react";
import { graphql } from "gatsby";

export const sidebarItems = [
  { name: 'home', label: 'HOME', path: '/' },
  { name: 'posts',
    label: 'POSTS',
    path: null,
    items: [
      { name: 'cleancode', label: 'CleanCode', path: '/cleancode' },
      { name: 'react', label: 'React Study', path: '/react' },
      { name: 'functionalJavascript', label: 'Functional Javascript', path: '/fnjs' },
    ]
  },
  { name : 'about',
    label: 'ABOUT',
    path: null,
    items: [
      { name: 'profile', label: 'Profile', path: '/profile' }
    ]
  },
]
/*
const sidebarComponent = ({data}) => {
  console.log(data);
  data.allMarkdownRemark.edges.map(({ node })=> {
    console.log(node.frontmatter.subject);
  })
}

export const query = graphql`
  query{
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            subject
          }
        }
      }
    }
  }
`
*/