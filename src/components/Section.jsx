import React from 'react'
import { Container } from './Container'

function Section({ children, custom, align = "center"}) {
    return (
        <Container full={true} align={align} custom={`${custom}`}>
            {children}
        </Container>
    )
}

export default Section