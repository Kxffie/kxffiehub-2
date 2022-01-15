// Import thing
import Head from 'next/head'
import Router from 'next/router';
import nProgress from 'nprogress';

// Styles
import Layout from "./modules/Layout"
import '../styles/nprogress.css'

// nprogress
Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

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
