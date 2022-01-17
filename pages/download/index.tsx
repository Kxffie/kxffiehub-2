import Head from 'next/head'
import React from 'react'

import {Typography, Container } from '@material-ui/core'

const index = () => {
  return (
    <div>
      <Head>
        <title>KxffieHub.xyz | Download</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
      </Head>

      <main>
        <Container maxWidth="md">
          <Typography variant="h4" color="inherit" align="left" gutterBottom>
            Download
            <Typography variant="subtitle1" color="inherit" align="left">
              Coming Soon..
            </Typography>
          </Typography>
        </Container>
      </main>
    </div>
  )
}

export default index
