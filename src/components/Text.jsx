import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

/**
 * 
 * @param {Number} min - Minimun font size value
 * @param {Number} max - Maximum font size value 
 * @returns React components
 */

function Text({ children, minSize = 16, maxSize = 20 }) {
    const [size, setSize] = useState(16)

    const fluidFont = (min, max) => {
        const vw = window.innerWidth,
            minVw = 640,
            maxVw = 1920

        const calc = min + (max - min) * ((vw - minVw) / (maxVw - minVw))

        if (calc <= min) return setSize(min)
        if (calc >= max) return setSize(max)

        setSize(calc)
    }

    useEffect(() => {
        fluidFont(minSize, maxSize)
        window.addEventListener('resize', fluidFont)

        return () => {
            window.removeEventListener('resize', fluidFont)
        }
    })

    return (
        <p style={{ fontSize: `${size}px` }}>{children}</p>
    )
}

export default Text