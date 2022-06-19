import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Head from 'next/head';
import React, { Children } from 'react';
import useStyles from '../utils/styles';

export default function Layout({children}) {
  const classes = useStyles();  
  return (
    <div>
        <Head>
            <title>Glossy Ecom</title>
        </Head>
        <AppBar position='static' className={classes.navbar}>
            <Toolbar>
                <Typography>Glossy</Typography>
            </Toolbar>
        </AppBar>
        <Container className={classes.main}>
            {children}
        </Container>
        <footer className={classes.footer}>
            <Typography>
              All rights reserved. Next Glossy.  
            </Typography>
        </footer>
    </div>
  )
}
