import React from 'react'
import gsap from 'gsap'

function AboutDetail({ title, children: text }) {

    const revealAnimation = (target, opened) => {
        // target[0] as parent, target[1] as child
        const tl = gsap.timeline()

        if (opened) {
            tl.fromTo(target[1],
                { opacity: 1, y: 0, display: 'block', ease: 'power2.out', duration: 1 },
                { opacity: 0, y: 100, display: 'hidden' }
            )
            tl.to(target[0], { height: '25vh', backgroundColor: 'transparent' }, '>0.5')
        } else {
            tl.to(target[0], { height: '40vh', backgroundColor: '#C20C86' })
            tl.fromTo(target[1],
                { opacity: 0, y: 100, display: 'hidden' },
                { opacity: 1, y: 0, display: 'block', ease: 'power2.out', duration: 1 }, '>0.5'
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
        if (target.dataset.opened === "true") {
            target.dataset.opened = "false"
            revealAnimation([target, textInChildren], true)
        } else {
            revealAnimation([target, textInChildren], false)
            target.dataset.opened = "true"
        }
    }

    return (
        <div
            onClick={e => revealTextOnClick(e)}
            data-clickable="true"
            data-opened="false"
            className='p-6 w-full hover:bg-main-200 transition-all h-[25vh]'
        >
            <h1 className='text-[2rem] header text-white mb-4'>{title}</h1>
            <p className='w-full text-white overflow-hidden'>
                <span className='w-3/4 hidden font-satoshi font-semibold tracking-wider'>
                    {text}
                </span>
            </p>
        </div>
    )
}

export default AboutDetail