import React from 'react'
import Nav from '../components/Nav'
import { Container } from '../components/Container'
import Button from '../components/ui/Button'

function LandingPage() {
  return (
    <>
      <Nav />
      <Container custom="bg-yellow-400" full={true} type="col-center">
          <h3 className='font-bold text-red-400'>JUMBOTRON</h3>
          <Button animate={true}>Test</Button>
      </Container>

    </>
  )
}

export default LandingPage