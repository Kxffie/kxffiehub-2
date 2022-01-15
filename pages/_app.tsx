// Import thing
import Head from 'next/head'

// Styles
import Layout from "./modules/Layout"

// app
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
        <link rel="icon" href="pfp_plain.png" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
