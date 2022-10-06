import React from 'react'
import { Section, Wrapper } from '../../components/layout/Container'
import Sphere from '../../components/Sphere'
import HeaderMarquee from '../../animation/HeaderMarquee'
import ScrollCaraousel from '../../components/caraousel/ScrollCaraousel'

function Services() {
    return (
        <Section customClass='bg-radial-dark'>
            <Wrapper>
                <HeaderMarquee>SERVICES-SERVICES-SERVICES</HeaderMarquee>
            </Wrapper>
            <Wrapper customClass='absolute z-10'>
                <Sphere size={500} customClass="bg-radial-dark overflow-hidden">
                </Sphere>
            </Wrapper>
            <Wrapper customClass='absolute z-20'>
                <ScrollCaraousel />
            </Wrapper>
        </Section>
    )
}

export default Services