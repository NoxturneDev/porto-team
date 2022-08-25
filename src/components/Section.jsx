import React from 'react'
import { Container } from './Container'

function Section({ children, custom }) {
    return (
        <Container  full={true} dir="column" align="top" custom={custom}>
            <Container custom="pl-60" align="left" full={true}>
                {children}
            </Container>
        </Container>
    )
}

export default Section