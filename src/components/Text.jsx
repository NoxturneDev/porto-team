import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Text({ children, min = 16, max = 20 }) {
    const [size, setSize] = useState(16)

    const fluidFont = () => {
        const vw = window.innerWidth,
            minVw = 640,
            maxVw = 1920

        const calc = min + (max - min) * ((vw - minVw) / (maxVw - minVw))

        if (calc <= min) return setSize(min)
        if (calc >= max) return setSize(max)

        setSize(calc)
        console.log(calc)
    }

    useEffect(() => {
        fluidFont()
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