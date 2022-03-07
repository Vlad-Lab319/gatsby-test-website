import * as React from "react";
// import { Link } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>
        I'm making this by following the Gatsby Tutorial
      </p>
      <StaticImage
        alt="Example for WebSocket with React"
        src="../images/WebSocket_useEffect.png"
      />
    </Layout>

  )
}

export default IndexPage;
