import React from 'react'
import Link from 'next/link'
import {AppBar, Container, Toolbar, Typography, Box, Button } from '@material-ui/core'
import { YoutubeFill } from 'akar-icons';

const Navbar = () => {
    return (
        <div style={{flexGrow: 1}}>
            <AppBar color="inherit">
                <Toolbar>
                    <Typography variant="h6" color="inherit" component="div" style={{flexGrow: 1}}>
                        Kxffie Hub
                    </Typography>
                    <Link href="https://youtube.kxffiehub.xyz/">
                        <Button><YoutubeFill color="black" size={24} /></Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;