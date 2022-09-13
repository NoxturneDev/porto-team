import React from 'react'
import { useState, useEffect } from 'react'

/**
 * 
 * @param {Number} min - Minimun font size value
 * @param {Number} max - Maximum font size value 
 * @returns React components
 */

function Header({ children, headerSize = "sm", customClass = '' }) {
    const [size, setSize] = useState(16)

    const breakpointSize = {
        sm: [24, 28],
        md: [32, 48],
        lg: [52, 72],
    }

    const handleSize = (size) => {
        for (const sz in breakpointSize) {
            if (size === sz) {
                return breakpointSize[sz]
            } 
        }
    }

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

        const sz = handleSize(headerSize)
        fluidFont(sz[0], sz[1])

        window.addEventListener('resize', fluidFont)

        return () => {
            window.removeEventListener('resize', fluidFont)
        }
    })

    return (
        <p style={{ fontSize: `${size}px` }} 
        className={`text-white header text-center ${customClass}`}
        >{children}</p>
    )
}

export default Header