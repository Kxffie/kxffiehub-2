import React from 'react'

import Navbar from './Navbar/Navbar'
import { Toolbar } from '@material-ui/core'

const layout = ({children}) => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* Pages */}
            <div>
                <Toolbar />
                <Toolbar />
                {children}
            </div>
        </div>
    )
}

export default layout
