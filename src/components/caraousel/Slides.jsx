import React, { useEffect } from 'react'
import { Wrapper, Container} from '../layout/Container'


function Slides({ children, position }) {
    return (
        <div
            className={`container-flex w-screen h-screen`}>
            <Container>
                <Wrapper customClass='bg-dark-300 w-2/4 h-3/4 rounded-md shadow-md'></Wrapper>
            </Container>
        </div>
    )
}

export default Slides