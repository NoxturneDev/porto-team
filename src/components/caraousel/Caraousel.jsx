import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Section from '../Section'
import { Container } from '../Container'
import Card from '../ui/Cards'
import Button from '../ui/Button'
import ProjectSection from '../project/ProjectSection'

function Caraousel() {
    let i = 0
    const anim = useRef(null)
    const slide = useRef(null)
    let index = 1
    const description = ['lorem anjay mabar mantpa jiwa aiowdnaownd', 'aidnai aijn anjir keren banget ini gwa cokkks']

    function scrolling() {
        let st = window.scrollY
        const offset = anim.current.offsetTop + anim.current.offsetHeight 

        if ( st > anim.current.offsetTop - 100) {
            // console.log(anim.current.offsetTop)
            i--
        } else if(st < offset) {
            i++
        }

        console.log(st, offset, anim.current.offsetHeight + anim.current.offsetTop)
        gsap.to(anim.current, {
            x: i * 5,
            ease: "power2.out"
        })
    }

    function prevSlide() {
        index--

        let w = slide.current.offsetWidth / 4
        let current = w * index * -1

        if (index < 0) {
            // gsap.fromTo(slide.current, {opacity: 0, x: current}, {opacity: 1,})
            index = 0
            return
        }

        console.log(index)
        gsap.to(slide.current, { translateX: `${current}px` })

        return
    }

    function nextSlide() {
        let w = slide.current.offsetWidth / 4

        if (index >= 4) {
            index = 4
            return
        }

        console.log(index)
        gsap.to(slide.current, { translateX: `-${w * index}px` })

        index++
        return
    }

    useEffect(() => {
        window.addEventListener('scroll', scrolling)

        return (() => {
            window.removeEventListener('scroll', scrolling)
        })
    })

    return (
        <>
            <Section custom="bg-slate-500 p-0">
                <div ref={anim} className="container-flex translate-x[-100%]">
                    <Card size="sm" custom="bg-slate-800"></Card>
                    <Card size="lg" custom="bg-slate-900"></Card>
                    <Card size="sm" custom="bg-slate-800"></Card>
                    <Card size="md" custom="bg-slate-900"></Card>
                    <Card size="lg" custom="bg-slate-800"></Card>
                    <Card size="sm" custom="bg-slate-900"></Card>
                    <Card size="lg" custom="bg-slate-900"></Card>
                    <Card size="md" custom="bg-slate-800"></Card>
                </div>
            </Section>
            <Section custom="p-0">
                <div className='container-flex min-w-max p-0' ref={slide}>
                    {/* <div className="carousel-item" >
                    <Container custom="bg-red-400"></Container>
                </div>
                <div className="carousel-item">
                    <Container custom="bg-red-400"></Container>
                </div>
                <div className="carousel-item">
                    <Container custom="bg-red-400"></Container>
                </div> */}

                    <div className="container-flex w-screen h-screen bg-red-400" >
                        <ProjectSection title="TITLE 1" url="/" img="../assets/23.png" desc={description} />
                    </div>
                    <div className="container-flex w-screen h-screen bg-red-500" >
                        <ProjectSection title="TITLE 2" url="/" img="../assets/23.png" desc={description} />
                    </div>
                    <div className="container-flex w-screen h-screen bg-red-600" >
                        <ProjectSection title="TITLE 2" url="/" img="../assets/23.png" desc={description} />
                    </div>
                    <div className="container-flex w-screen h-screen bg-red-700" >
                        <ProjectSection title="TITLE 2" url="/" img="../assets/23.png" desc={description} />
                    </div>

                </div>
                <div className="button-group-floating container-flex p-0 absolute w-screen h-screen">
                    <div className="container-flex-l w-full px-6">

                        <div onClick={prevSlide}>
                            <Button>Prev</Button>
                        </div>
                    </div>
                    <div className="container-flex-r w-full px-6">
                        <div onClick={nextSlide}>
                            <Button>Next</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Caraousel