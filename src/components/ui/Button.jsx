import React from 'react'
import { motion } from 'framer-motion'

const buttonType = {
    primary: {
        fill: 'button-primary',
        line: 'button-primary-line'
    },
    secondary: {
        fill: 'button-secondary',
        line: 'button-line'
    }
}

function Button({ children, custom, type, animate }) {

    function handleType(type) {
        switch (type) {
            case 'primary':
                return buttonType.primary.fill
            case 'primary-line':
                return buttonType.primary.line
            case 'secondary':
                return buttonType.secondary.fill
            case 'secondary-line':
                return buttonType.secondary.line
            default:
                return buttonType.primary.fill
        }
    }

    // if animate is false, return without motion
    if (!animate) {
        return <button className={`${handleType(type)} ${custom}`}>{children}</button>
    }

    return (
        <motion.button
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{type: 'tween'}}
            className={`${handleType(type)} ${custom}`}>{children}</motion.button>
    )
}

export default Button