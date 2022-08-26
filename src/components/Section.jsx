import React from 'react'
import { Container } from './Container'

function Section({ children, custom }) {
    return (
        <Container  full={true} dir="column" align="top" custom={`${custom} p-0`}>
            <Container align="left" full={true} custom="p-0">
                {children}
            </Container>
        </Container>
    )
}

export default Section