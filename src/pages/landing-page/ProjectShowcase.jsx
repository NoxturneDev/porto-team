import React from 'react'
import { Section, Wrapper } from '../../components/layout/Container'
import HeaderMarquee from '../../animation/HeaderMarquee'
import Sphere from '../../components/Sphere'

function ProjectShowcase() {
    return (
        <Section customClass="bg-radial-dark min-h-[200vh]" direction="column">
            <HeaderMarquee>PROJECT-PROJECT</HeaderMarquee>
            <Sphere />
        </Section>
    )
}

export default ProjectShowcase