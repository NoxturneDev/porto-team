import React from 'react'

function Button({ text, custom }) {
    return (
        <button className={`button-primary ${custom}`}>{text}</button>
    )
}

export default Button