import React from 'react'
import Link from 'next/link'
import {AppBar, Container, Toolbar, Typography, Button} from '@material-ui/core'

const Navbar = () => {
    return (
        <div>
            <AppBar color="inherit">
                <Toolbar>
                    <Container>
                        <Typography variant="h6" color="inherit">
                            Kxffie Hub
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;