import React from 'react'
import { Container } from '../Container'
import Image from '../ui/Image'
import Section from '../Section';
import ProjectDesc from './ProjectDesc';
/**
 * 
 * @param {String} title - project section title
 * @param {String} img - image source/path
 * @param {string} url - project website url
 * @param {Array} desc - an array contained of a string for creating project description text
 * @returns 
 */
function ProjectSection({ title = "TITLE", img, url, desc }) {
    
    return (
        <Section custom='bg-slate-500'>
            <Container custom="shadow-2xl h-3/4 mr-4 p-0">
                <Image url={img} custom="h-full w-full" rounded={true} />
            </Container>
            <Container
                custom="w-100 h-3/4 translate-x-[-10rem]"
                dir="column"
            >
                <ProjectDesc title={title} url={url} desc={desc}/>
            </Container>
        </Section >
    )
}

export default ProjectSection