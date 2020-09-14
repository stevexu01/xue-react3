import React from 'react'

function Person(props) {
    return (
        <div>
            {props.profile.email}
        </div>
    )
}

export default Person
