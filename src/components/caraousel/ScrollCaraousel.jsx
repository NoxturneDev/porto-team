import React, { useEffect } from 'react'

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
        <Section custom="bg-main-300 p-0 ">
            <div ref={anim} className="container-flex-col translate-x[-100%]">
                <Wrapper>
                    <Card size="lg" custom="bg-dark-300 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-dark-300 h-[8rem]"></Card>
                    <Card size="md" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-dark-300 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-main-200 h-[8rem] "></Card>
                    <Card size="md" custom="bg-dark-300 h-[8rem]"></Card>
                </Wrapper>
                <Wrapper>
                    <Card size="lg" custom="bg-dark-300 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-dark-300 h-[8rem]"></Card>
                    <Card size="md" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-dark-300 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="lg" custom="bg-main-200 h-[8rem]"></Card>
                    <Card size="md" custom="bg-dark-300 h-[8rem]"></Card>
                </Wrapper>
            </div>
        </Section>
    )
}

export default ScrollCaraousel