import React, { useEffect } from 'react'
import luxy from 'luxy.js'
import HeaderMarquee from '../animation/HeaderMarquee'
import { Section, Wrapper } from '../components/layout/Container'
import ScrollCaraousel from '../components/caraousel/ScrollCaraousel'
import Sphere from '../components/Sphere'
import Line from '../components/Line'

function Demo(props) {

    console.log(props)
    const init = () => {
        luxy.init()

        luxy.settings.wrapperSpeed = 0.02
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <div style={{ overflowX: 'hidden' }} id="luxy">
            <Section customClass="bg-radial-main">
                <HeaderMarquee>TEST-MARQUEE</HeaderMarquee>
            </Section>
            <Section customClass="bg-radial-dark">
                <HeaderMarquee>MARQUEE</HeaderMarquee>
            </Section>
            <Section customClass='bg-radial-dark'>
                <Wrapper>
                    <Line title="ANJAY"></Line>
                    <HeaderMarquee>TECH-STACK</HeaderMarquee>
                </Wrapper>
                <Wrapper customClass='absolute z-10'>
                    <Sphere size={500} customClass="bg-radial-dark overflow-hidden">
                    </Sphere>
                </Wrapper>
                <Wrapper customClass='absolute z-20'>
                    <ScrollCaraousel />
                </Wrapper>
            </Section>
        </div>
    )
}

export default Demo