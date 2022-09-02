import React, { useEffect } from 'react'
import { ProjectSectionRight } from '../project/ProjectSection'


function Slides({ children, position }) {


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
            className={`container-flex w-screen h-screen bg-red-400`}>

            <ProjectSectionRight title={children} url="/" img="../assets/image/23.png" desc={'TESTANJAY'} />
        </div>
    )
}

export default Slides