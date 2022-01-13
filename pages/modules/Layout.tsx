import React from 'react'
import {Toolbar, Container} from '@material-ui/core'

import Navbar from './Navbar/Navbar'

const layout = ({children}) => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <Toolbar />
                {children}
            </div>
        </div>
    )
}

export default layout
