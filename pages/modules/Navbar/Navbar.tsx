import React from 'react'
import {AppBar, Container, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core'

const Navbar = () => {
    return (
        <div>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <Container maxWidth="lg">
                        <Typography variant="h6" color="inherit">
                            Kxffiehub.xyz
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar;