import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Wrapper, Section } from '../layout/Container'
import Card from '../ui/Cards'

function ScrollCaraousel() {
    let i = 0
    let last = 0
    const anim = useRef(null)

    function scrolling() {
        let st = window.scrollY

        if (st > last) {
            i--
        } else {
            i++
        }

        gsap.to(anim.current.firstChild, {
            x: i * 6,
            ease: "power2.out"
        })
        gsap.to(anim.current.lastChild, {
            x: -i * 6,
            ease: "power2.out"
        })

        last = st
    }
    
    useEffect(() => {
        window.addEventListener('scroll', scrolling)

        return (() => {
            window.removeEventListener('scroll', scrolling)
        })
    })

    return (
        <Section custom="bg-main-300 p-0">
            <div ref={anim} className="container-flex-col translate-x[-100%]" style={{overflowX: 'hidden'}}>
                <Wrapper>
                    <Card size="lg" customClass="bg-dark-300 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-300 h-[6rem]"></Card>
                    <Card size="md" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-300 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-200 h-[6rem] "></Card>
                    <Card size="md" customClass="bg-dark-300 h-[6rem]"></Card>
                </Wrapper>
                <Wrapper>
                    <Card size="lg" customClass="bg-dark-300 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-300 h-[6rem]"></Card>
                    <Card size="md" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-300 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="lg" customClass="bg-dark-200 h-[6rem]"></Card>
                    <Card size="md" customClass="bg-dark-300 h-[6rem]"></Card>
                </Wrapper>
            </div>
        </Section>
    )
}

export default ScrollCaraousel