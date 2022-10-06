import React from 'react'
import {Section, Wrapper} from '../../components/layout/Container'
import Header from '../../components/Header'
import Sphere from '../../components/Sphere'
function Jumbtoron() {
  return (
    <Section customClass="bg-radial-dark">
      <Wrapper>
        <Sphere pink/>
        <Header headerSize="lg" customClass="absolute tracking-[2rem]">WEB</Header>
      </Wrapper>
    </Section>    
  )
}

export default Jumbtoron