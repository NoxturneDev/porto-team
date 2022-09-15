import React from 'react'
import { Section } from '../components/layout/Container'
import HeaderMarquee from '../animation/HeaderMarquee'

function Demo() {
    return (
        <div style={{ overflowX: 'hidden'}}>
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