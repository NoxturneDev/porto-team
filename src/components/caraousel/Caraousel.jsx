import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import Section from '../Section'
import { Container } from '../Container'
import Card from '../ui/Cards'
import Button from '../ui/Button'
import ProjectSection from '../project/ProjectSection'
import Slides from './Slides'

function Caraousel() {
    let i = 0
    const anim = useRef(null)
    const slide = useRef(null)
    const description = ['lorem anjay mabar mantpa jiwa aiowdnaownd', 'aidnai aijn anjir keren banget ini gwa cokkks']
    const active = useRef(null)

    function scrolling() {
        let st = window.scrollY
        const offset = anim.current.offsetTop + anim.current.offsetHeight

        if (st > anim.current.offsetTop - 100) {
            i--
        } else if (st < offset) {
            i++
        }

        gsap.to(anim.current, {
            x: i * 5,
            ease: "power2.out"
        })
    }

    let index = 0

    function slideIt(direction) {
        const targets = slide.current.children

        if (direction === "next") {
            console.log('next')
            if (index > 2) {
                gsap.set(slide.current, { xPercent: 100, onComplete(){
                    gsap.to(slide.current, {xPercent: 0})
                } })
                index = 0
                return
            }
            gsap.to(slide.current, { xPercent: index * -100 })
            // gsap.fromTo(targets[index], { xPercent: index * 100 }, { xPercent: -100 * index })
            // gsap.to(targets[index - 1], { xPercent: -100 * index })

            // if (index === targets.length) {
            //     gsap.fromTo(targets[0], {xPercent: 100}, { xPercent: 0 })
            //     gsap.to(targets[targets.length], {xPercent: 100})
            //     index = 0
            // }
        }
        if (direction === "prev") {
            if (index < -2) {
                gsap.set(slide.current, { xPercent: -100, onComplete(){
                    gsap.to(slide.current, {xPercent: 0})
                } })
                index = 0
                return
            }
            gsap.to(slide.current, { xPercent: -index * 100 })

            // const current = gsap.getProperty(targets[index], 'xPercent')
            // gsap.fromTo(targets[index], { xPercent: current }, { xPercent: -100 * index })
            // gsap.to(targets[index + 1], { xPercent: 100 * index, ease: "sine.out" })

            // if (index === -1) {
            //     console.log(index)
            //     // gsap.set(slide.current, {xPercent: 100})
            //     gsap.set(targets, {xPercent: 100 * index})
            //     gsap.to(targets[0], {xPercent: 100 * targets.length})
            //     gsap.to(targets[targets.length], { xPercent: 100 * targets.length })
            //     index = targets.length
            // }
        }
    }

    function prevSlide() {
        index--
        // if (index < 0) {
        //     index = -1
        // }

        console.log(index)

        slideIt("prev")
        return
    }

    function nextSlide() {
        const targets = slide.current.children

        index++
        if (index > targets.length) {
            index = targets.length
            return
        }

        slideIt("next")
        return
    }

    useEffect(() => {
        console.log(gsap.getProperty(slide.current, "xPercent"))
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
            <Section custom="p-0 bg-slate-500">
                <ul className='container-flex w-screen bg-red-400 p-0' ref={slide} >
                    <li className='slides slide-1' >
                        <Slides position="next">Test 3</Slides>
                    </li>
                    <li className='slides slide-1'>
                        <Slides position="next">Test 1</Slides>
                    </li>
                    <li className='slides slide-2'>
                        <Slides position="current">Test 2</Slides>
                    </li>
                    <li className='slides slide-3'>
                        <Slides position="next">Test 3</Slides>
                    </li>
                    <li className='slides slide-3'>
                        <Slides position="next">Test 1</Slides>
                    </li>
                </ul>
                <div className="button-group-floating container-flex p-0 absolute w-screen h-screen">
                    <div className="container-flex-l w-full px-6">

                        <div onClick={prevSlide}>
                            <Button animate={true}>Prev</Button>
                        </div>
                    </div>
                    <div className="container-flex-r w-full px-6">
                        <div onClick={nextSlide}>
                            <Button animate={true}>Next</Button>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Caraousel

// TODO: New slider functionality, better one