import React from 'react'
import { Container } from '../components/Container'
import Nav from '../components/Nav'

import Paragraph from '../components/Paragraph';
import Carousel from '../components/caraousel/Caraousel'
import Footer from '../components/Footer';


function About() {
  return (
    <div style={{overflowX: 'hidden'}}>
      <Nav />
      {/* <div className='flex bg-gray-900 items-center w-screen h-screen'>
          <h3 className='' >About Page</h3>
          <Container custom='bg-gray-900' >
          </Container>
        </div> */}
      <Container custom='bg-gray-900 w-full' dir='column' full>

        <h2 className='text-zinc-200 mb-5 font-bold text-4xl' >About Us</h2>
        <div className='bg-slate-700 mt-7 mb-28   w-4/6 h-3/5'>
        </div>
        <Paragraph custom='text-zinc-200 mt-28 pt-9 text-2xl font-bold' align='center'>Lorem Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit</Paragraph>


      </Container>

      <Container custom='bg-gray-900 w-full' full>
        {/* For galih carousel  */}

        {/* <div  className='bg-slate-700 mr-7    w-4/6 h-3/5'>
           </div>

           <div  className='bg-slate-700 mr-7    w-4/6 h-3/5'>
           </div>

           <div  className='bg-slate-700 mr-7    w-4/6 h-3/5'>
           </div> */}

      </Container>

      <Carousel />
      <Footer />
    </div>
  )
}

export default About