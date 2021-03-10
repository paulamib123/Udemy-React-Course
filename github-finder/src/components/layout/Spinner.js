import React, { Fragment } from 'react'

function Spinner() {
    return (
        <Fragment>
            <img src='spinner.gif'
                alt='Loading...'
                style={{
                    width: '200px',
                    margin: 'auto',
                    display: 'block'
                }}></img>
        </Fragment>
    )
}

export default Spinner
