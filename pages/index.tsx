import Head from 'next/head'
import React from 'react'

import {Typography, Container} from '@material-ui/core'

const index = () => {
  return (
    <div>
      <Head>
        <title>KxffieHub.xyz | Home</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400, 500,700&display=swap" />
      </Head>

      <main>
        <Container maxWidth="lg">
            <Typography variant="h4" color="inherit" align="center">
                Website is under construction. Yo
            </Typography>
        </Container>
      </main>
    </div>
  )
}

export default index
