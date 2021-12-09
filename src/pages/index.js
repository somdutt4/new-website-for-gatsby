import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi Guysss</h1>
    <p>Welcome to ABHI site.</p>
    <p>Now go build something great for gatsby.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page first 2</Link> <br />
      <Link to="/using-typescript/">Go to second "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to third "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to forth"Using DSG"</Link>
    </p>
  </Layout>
)

export default IndexPage
