import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {
          data.allMdx.nodes.map(node => (

            <article key={node.id}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              <p>Modified: {node.parent.modifiedTime}</p>
              <MDXRenderer>
                {node.body}
              </MDXRenderer>
            </article>

            // <li key={node.name}>
            //   {node.name} {node.changeTime}
            // </li>
          ))
        }
      </ul>
    </Layout>
  );
}

// export const query = graphql`
//   query MyQuery {
//     allFile {
//       nodes {
//         name
//         changeTime
//       }
//     }
//   }
// `

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      id
      body
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
}
`


export default BlogPage;