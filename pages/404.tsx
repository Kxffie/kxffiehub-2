import React from 'react'
import Link from 'next/link'

import {Typography} from '@material-ui/core'

const NotFound = () => {

    return (
        <div>
            <Typography variant="h4" align="center">Error 404: Page Not Found</Typography>
            <Typography variant="h6" align="center">
                Go back to the <Link href="/">Homepage</Link>
            </Typography>
        </div>
    )
}

export default NotFound
