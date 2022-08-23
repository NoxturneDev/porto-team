import React from 'react'
import Nav from '../components/Nav'
import { Container } from '../components/Container'
import Button from '../components/ui/Button'

function LandingPage() {
  return (
    <>
      <Nav />
      <Container custom="bg-yellow-400" full={true} type="bot">
          <h3 className='font-bold text-red-400'>JUMBOTRON</h3>
          <Button text="test" />
      </Container>
    </>
  )
}

export default LandingPage