import React from 'react'

import Navbar from './Navbar/Navbar'

const layout = ({children}) => {
    return (
        <div>

            {/* Navbar */}
            <Navbar />

            {/* Pages */}
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout
