import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Section, Wrapper } from '../../components/layout/Container'
import Header from '../../components/Header'
import Sphere from '../../components/Sphere'

function Jumbtoron() {
  const title = useRef(null)

  const typeWriterAnimation = () => {

    const tl = gsap.timeline({ yoyo: true, repeat: -1 })
    tl.add('begin')
    tl.fromTo(title.current, {
      width: 0
    }, {
      width: '961px',
      ease: "steps(8)",
      duration: 2
    }, 'begin')

    tl.fromTo(title.current, {
      borderRightWidth: '8px',
      borderRightColor: "white"
    }, {
      borderRightColor: "#C20C86",
      ease: "steps(8)",
    }, 'begin')
    console.log(title.current.offsetWidth)
    // text cursor animation
    // tl.fromTo(".anim-typewriter", 0.5, {
    //   "border-right-color": "rgba(255,255,255,0.75)"
    // }, {
    //   "border-right-color": "rgba(255,255,255,0)",
    //   repeat: -1,
    //   ease: SteppedEase.config(37)
    // }, 0);

    // tl.play();
  }

  const randomizeText = () => {
    let text = "HELLOWEB"
    const randomText = ["BONJOUR", "HALO", ""]
  }

  useEffect(() => {
    typeWriterAnimation()
  }, [])
  return (
    <Section customClass="bg-radial-dark">
      <Wrapper>
        <Sphere pink />
        {/* <Header headerSize="mega" customClass="absolute tracking-[2rem]" ref={title}>HELLOWEB</Header> */}
        <div className="wrapper overflow-hidden absolute tracking-[2rem]" ref={title}>
          <h1 className="text-white header text-[10rem]">HELLOWEB</h1>
        </div>
      </Wrapper>
    </Section>
  )
}

export default Jumbtoron