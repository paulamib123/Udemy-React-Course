import React from 'react'

function Navbar(props) {
    const { icon, title } = props
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
}

export default Navbar
