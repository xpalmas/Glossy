import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import Head from 'next/head'
import React, { Children } from 'react'

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title>Glossy Ecom</title>
        </Head>
        <AppBar position='static'>
            <Toolbar>
                <Typography>Glossy</Typography>
            </Toolbar>
        </AppBar>
        <Container>
            {children}
        </Container>
        <footer>
            <Typography>
              All rights reserved. Next Glossy.  
            </Typography>
        </footer>
    </div>
  )
}
