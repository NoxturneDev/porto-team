import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { Wrapper } from '../../components/layout/Container'
import Header from '../../components/Header'
import Text from '../../components/Text'

function AboutDetail({ title, children: text }) {
    const [active, setActive] = useState('')
    const disableClick = useRef(false)

    const revealAnimation = (target, status) => {
        // target[0] as parent, target[1] as child
        const tl = gsap.timeline()

        if (status === "opened") {
            // close animation 
            tl.fromTo(target[1],
                { opacity: 1, y: 0, display: 'block', ease: 'power4.out', duration: 1 },
                { opacity: 0, y: 100, display: 'hidden' }
            )
            tl.to(target[0], { height: '25vh', ease: 'power2.in', duration: 0.8, onComplete: () => disableClick.current = false }, '<')
        } else {
            tl.to(target[0], { height: '40vh', ease: 'power2.in', duration: 0.8 })
            tl.fromTo(target[1],
                { opacity: 0, y: 100, display: 'hidden' },
                { opacity: 1, y: 0, display: 'block', ease: 'power4.out', duration: 1, onComplete: () => disableClick.current = false }, '<0.5'
            )
        }
    }

    const revealTextOnClick = (e) => {
        e.stopPropagation()


        const clicked = e.target,
            target = !clicked.dataset.clickable ? clicked.parentElement : clicked, //checking if the selected element isn't the actual element or not
            children = target.children,
            textInChildren = children[1].children

        // if the element is clicked 
        if (!disableClick.current)
            if (target.dataset.opened === "true") {
                target.dataset.opened = "false"
                revealAnimation([target, textInChildren], "opened")
                setActive(currActive => currActive = false)
            } else {
                revealAnimation([target, textInChildren], "not opened")
                target.dataset.opened = "true"
                setActive(currActive => currActive = true)
            }

        // wait for the animation to stop until it can get clicked again
        disableClick.current = true
    }

    return (
        <div
            onClick={e => revealTextOnClick(e)}
            data-clickable="true"
            data-opened="false"
            className={`p-6 w-full ${active && active !== "" ? 'bg-main-200' : ''} hover:bg-main-200 transition-all h-[25vh]`}
        >
            <Header headerSize="md" customClass="container-flex-l">{title}</Header>
            <Text customClass='w-full text-white overflow-hidden my-4' textSize="md">
                <span className='w-3/4 hidden tracking-wider'>
                    {text}
                </span>
            </Text>
        </div >
    )
}

export default AboutDetail