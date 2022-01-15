import React from 'react'
import Link from 'next/link'
import {AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core'
import { YoutubeFill, DiscordFill, GithubFill } from 'akar-icons';

const Navbar = () => {
    return (
        <Box style={{flexGrow: 1}}>
            <AppBar color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div" style={{flexGrow: 1}}>
                        Kxffie Hub
                    </Typography>
                    <Link href="https://youtube.kxffiehub.xyz/">
                    <a target="_blank"><Button><YoutubeFill color="black" size={24} /></Button></a>
                    </Link>
                    <Link href="https://discord.kxffiehub.xyz/">
                    <a target="_blank"><Button><DiscordFill color="black" size={24} /></Button></a>
                    </Link>
                    <Link href="https://github.kxffiehub.xyz/">
                        <a target="_blank"><Button><GithubFill color="black" size={24} /></Button></a>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar;