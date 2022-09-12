import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { Container } from './Container'
import { useRef } from 'react'

function Sphere() {
    const [deg, setDeg] = useState(70)
    const sphere = useRef(null)

    const changeDegree = () => {

        
        const scroll = window.scrollY
        
        // if (scroll % 100 === 0 && scroll !== 0) {
        //     setDeg(120)
        //     return
        // }
        setDeg(scroll)
        // gsa.fromTo(sphere.current, {
        //     background:  `linear-gradient(70deg, rgba(40, 40, 40, 1), rgba(22, 22, 22, 1)`
        // }, {
        //     background:  `linear-gradient(120deg, rgba(40, 40, 40, 1), rgba(22, 22, 22, 1)`
        // })
    }

    useEffect(() => {
        window.addEventListener('scroll', changeDegree)

        return () => {
            window.removeEventListener('scroll', changeDegree)
        }
    }, [])

    return (
        <Container full>
            <div
                ref={sphere}
                className="w-72 h-72 rounded-full shadow-md"
                style={{
                    background:  `linear-gradient(${deg}deg, rgba(40, 40, 40, 1), rgba(22, 22, 22, 1)`
                }}
            >
                
            </div>
        </Container>
    )
}

export default Sphere