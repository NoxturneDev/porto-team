import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { Section } from '../components/layout/Container'
import Header from '../components/Header'

function HeaderMarquee({ children }) {
    const marquee = useRef(null)
    const requestRef = useRef(null)
    const animate = true

    let i = 0
    let passed = false

    const slidingAnimation = (i) => {
        gsap.to(marquee.current.firstChild, {
            x: i
        })
        gsap.to(marquee.current.lastChild, {
            x: -i
        })
    }

    const init = () => {
        const offset = marquee.current.offsetWidth - 3000
        requestRef.current = window.requestAnimationFrame(init)

        if (i === offset) {
            passed = true
        }

        if (i === 0) {
            passed = false
        }

        if (!passed) {
            i++
        } else {
            i--
        }

        slidingAnimation(i)
    }

    useEffect(() => {
        gsap.set(marquee.current.firstChild, {
            x: -100
        })
        gsap.set(marquee.current.lastChild, {
            x: 100
        })

        init()

        return () => {
            // STOPPED THE ANIMATION WHEN THE COMPONENT IS UNMOUNTED
            window.cancelAnimationFrame(requestRef.current)
        }
    })

    return (
        <div ref={marquee}>
            <h1 className="text-main-100 header text-[15rem] w-max">
                {children}-{children}-{children}-{children}
            </h1>
            <h1 style={{ transform: 'rotateX(180deg)' }}
                className="text-dark-300 header text-[15rem] w-max ">
                {children}-{children}-{children}-{children}
            </h1>
        </div>
    )
}

export default HeaderMarquee