import React from 'react'
import { Section } from '../components/layout/Container'
import HeaderMarquee from '../animation/HeaderMarquee'
import luxy from 'luxy.js'
import { useEffect } from 'react'

function Demo() {
    const init = () => {
        luxy.init()

        luxy.settings.wrapperSpeed = 0.01
    }
    useEffect(() => {
        init()
    }, [])
    return (
        <div style={{ overflowX: 'hidden'}} id="luxy">
            <Section customClass="bg-radial-main">
                <HeaderMarquee>TEST-MARQUEE</HeaderMarquee>
            </Section>
            <Section customClass="bg-radial-dark">
                <HeaderMarquee>TEST-MARQUEE</HeaderMarquee>
            </Section>
        </div>
    )
}

export default Demo