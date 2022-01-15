import React from 'react'
import Link from 'next/link'
import {AppBar, Toolbar, Typography, Box, Button, Container, makeStyles } from '@material-ui/core'
import { YoutubeFill, DiscordFill, GithubFill } from 'akar-icons';

const useStyles = makeStyles({
    button: {
        backgroundColor: 'transparent',
        filter: 'brightness(1.20)',
        '&:hover': {
            backgroundColor: '#f6ff9a'
        },
        '&:active': {
            backgroundColor: '#f1ff67'
        }
    },
  });
  

const Navbar = () => {
    const classes = useStyles();

    return (
        <Box style={{flexGrow: 1}}>
            <AppBar color="inherit">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" component="div" style={{flexGrow: 1}}>
                            Kxffie Hub
                        </Typography>

                        <Typography variant="h6" color="inherit" component="div" style={{flexGrow: 1}}>
                            <Link href="/">
                                <Button className={classes.button}>home</Button>
                            </Link>
                            <Link href="/projects">
                                <Button className={classes.button}>projects</Button>
                            </Link>
                        </Typography>

                        <Box component="div" style={{flexGrow: 0}}>
                            <Link href="https://youtube.kxffiehub.xyz/">
                                <a target="_blank"><Button className={classes.button}><YoutubeFill color="black" size={24} /></Button></a>
                            </Link>
                            <Link href="https://discord.kxffiehub.xyz/">
                                <a target="_blank"><Button className={classes.button}><DiscordFill color="black" size={24} /></Button></a>
                            </Link>
                            <Link href="https://github.kxffiehub.xyz/">
                                <a target="_blank"><Button className={classes.button}><GithubFill color="black" size={24} /></Button></a>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar;