import React, { useState } from 'react'
import { Section, Wrapper } from '../../components/layout/Container'
import AboutDetail from '../about/AboutDetail'


function AboutSection() {

    return (
        <Section direction="column" customClass="bg-radial-dark " align='left'>
            <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
            <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
            <AboutDetail title="HALLOWEB IS A VERY COOL AGENCY DUDE!">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, molestiae ad asperiores est autem consectetur facilis. Dicta ex autem distinctio.j</AboutDetail>
        </Section>
    )
}

export default AboutSection