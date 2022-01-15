import Head from 'next/head'
import React from 'react'

import {Typography, Container, Toolbar } from '@material-ui/core'

const index = () => {
  return (
    <div>
      <Head>
        <title>KxffieHub.xyz | Projects</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
      </Head>

      <main>
        <Toolbar />
        <Container maxWidth="lg">
          <Typography variant="h4" color="inherit" align="center" gutterBottom>
            Projects
          </Typography>
        </Container>
      </main>
    </div>
  )
}

export default index
