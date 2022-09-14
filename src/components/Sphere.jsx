import React, { useState, useEffect, useRef} from 'react'
import gsap from 'gsap'
import { Container } from './layout/Container'

function Sphere({ children, customClass }) {
    const [deg, setDeg] = useState(70)
    const sphere = useRef(null)

    const changeDegree = () => {
        const scroll = window.scrollY

        setDeg(scroll)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeDegree)

        return () => {
            window.removeEventListener('scroll', changeDegree)
        }
    }, [])

    return (
        <div
            ref={sphere}
            className={`w-[400px] h-[400px] rounded-full shadow-md ${customClass}`}
            style={{
                background: `linear-gradient(${deg}deg, #DB0F97, #600040`
            }}
        >
            {children}
        </div>
    )
}

export default Sphere