import Head from 'next/head'

import Layout from "./modules/Layout"
import styles from '../styles/Layout.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.main}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}

export default MyApp
