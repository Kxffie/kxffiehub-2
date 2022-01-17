import React from 'react'
import Link from 'next/link'
import {AppBar, Toolbar, Typography, Box, Button, Container } from '@material-ui/core'
import { YoutubeFill, DiscordFill, GithubFill } from 'akar-icons';

const Navbar = () => {
    return (
        <Box style={{flexGrow: 1}}>
            <AppBar color="inherit">
                <Container maxWidth="lg">
                    <Toolbar>
                        <Typography align="left" variant="h5" color="inherit" component="div" style={{flexGrow: 1}}>
                            Kxffie Hub
                        </Typography>

                        <Typography variant="h6" color="inherit" component="div" style={{flexGrow: 1}}>
                            <Link href="/">
                                <Button>home</Button>
                            </Link>
                            <Link href="/download">
                                <Button>download</Button>
                            </Link>
                            <Link href="/about">
                                <Button>about</Button>
                            </Link>
                        </Typography>

                        <Box component="div" style={{flexGrow: 0}}>
                            <Typography align="right">
                                <Link href="https://youtube.kxffiehub.xyz/">
                                    <a target="_blank"><Button><YoutubeFill color="black" size={24} /></Button></a>
                                </Link>
                                <Link href="https://discord.kxffiehub.xyz/">
                                    <a target="_blank"><Button><DiscordFill color="black" size={24} /></Button></a>
                                </Link>
                                <Link href="https://github.kxffiehub.xyz/">
                                    <a target="_blank"><Button><GithubFill color="black" size={24} /></Button></a>
                                </Link>
                            </Typography>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}

export default Navbar;