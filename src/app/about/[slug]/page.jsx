import React from 'react'

function AboutDetailsPage({params}) {
    const {slug} = params;
    return (
        <div>
            <h3>About Details Page</h3>
            <p>Params is: {slug}</p>
        </div>
    )
}

export default AboutDetailsPage
