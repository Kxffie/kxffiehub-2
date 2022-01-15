// Import thing
import Head from 'next/head'

// Styles
import Layout from "./modules/Layout"

const TopProgressBar = dynamic(
  () => {
    return import("components/TopProgressBar");
  },
  { ssr: false },
);

// app
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
        <link rel="icon" href="pfp_plain.png" />
      </Head>

      <Layout>
        <TopProgressBar />
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
