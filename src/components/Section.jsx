import React from 'react'
import { Container } from './Container'

function Section({ children, custom, align = "center", dir}) {
    return (
        <Container full={true} dir={dir} align={align} custom={`${custom}`}>
            {children}
        </Container>
    )
}

export default Section