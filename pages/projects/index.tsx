import Head from 'next/head'
import React from 'react'

import {Typography, Container } from '@material-ui/core'

const index = () => {
  return (
    <div>
      <Head>
        <title>KxffieHub.xyz | Projects</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
      </Head>

      <main>
        <Container maxWidth="lg" style={{marginTop: "100px"}}>
          <Typography variant="h4" color="inherit" align="center" gutterBottom>
            Projects
          </Typography>
        </Container>
      </main>
    </div>
  )
}

export default index