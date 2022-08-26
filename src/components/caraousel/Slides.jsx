import React, { useEffect } from 'react'
import gsap from 'gsap'
import ProjectSection from '../project/ProjectSection'

function Slides({ index, position, desc /* temporary */ }) {


    const nextSlide = () => {
        console.log("next")
    }

    const prevSlide = () => {
        console.log("prev")
    }

    useEffect(() => {
        if (position === "next") {
            nextSlide()
        }
        if (position === "prev") {
            prevSlide()
        }
    }, [])

    return (
        <div 
        className={`container-flex w-screen h-screen bg-red-400 ${position === "current" ? "bg-red-400" : "hidden"}`}>
            <ProjectSection title="TITLE 1" url="/" img="../assets/23.png" desc={desc} />
        </div>
    )
}

export default Slides