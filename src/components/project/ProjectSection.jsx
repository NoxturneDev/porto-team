import React from 'react'
import { Container } from '../Container'
import Image from '../ui/Image'
import Section from '../Section';
import ProjectDesc from './ProjectDesc';
import MotionComp from '../../animation/Motion';

/**
 * 
 * @param {String} title - project section title
 * @param {String} img - image source/path
 * @param {string} url - project website url
 * @param {Array} desc - an array contained of a string for creating project description text
 * @returns 
 */

function ProjectSectionLeft({ title = "TITLE", img, url, desc, animation }) {
    if (animation) {
        return (
            <Section custom='bg-slate-500'>
                <Container custom="shadow-2xl h-max p-0 ml-10">
                    <Image url={img} custom="w-full h-auto" rounded={true} animate="true" />
                </Container>
                <Container custom="h-3/4 translate-x-[-8rem]">
                    <MotionComp animation="fade-right">
                        <ProjectDesc title={title} url={url} desc={desc} />
                    </MotionComp>
                </Container>
            </Section >
        )
    }

    return (
        <Section custom='bg-slate-500'>
            <Container custom="shadow-2xl p-0 h-max ml-10">
                <Image url={img} custom="h-auto w-full" rounded={true} />
            </Container>
            <Container custom="w-100 h-3/4 translate-x-[-8rem]">
                <ProjectDesc title={title} url={url} desc={desc} />
            </Container>
        </Section >
    )
}

function ProjectSectionRight({ title = "TITLE", img, url, desc, animation }) {
    if (animation) {
        return (
            <Section custom='bg-blue-400'>
                <Container custom="w-100 h-3/4 translate-x-[8rem] z-10">
                    <MotionComp animation="fade-left">
                        <ProjectDesc title={title} url={url} desc={desc} align="right" />
                    </MotionComp>
                </Container>
                <Container custom="shadow-2xl p-0 h-max mr-10">
                    <MotionComp animation="fade-up">
                        <Image url={img} custom="w-full h-auto" rounded={true}  />
                    </MotionComp>
                </Container>
            </Section >
        )
    }

    return (
        <Section custom='bg-blue-400'>
            <Container custom="w-100 h-3/4 translate-x-[8rem]">
                <ProjectDesc title={title} url={url} desc={desc} align="right" />
            </Container>
            <Container custom="shadow-2xl h-max p-0 mr-10">
                <Image url={img} custom="h-auto w-full" rounded={true} />
            </Container>
        </Section >
    )
}

export { ProjectSectionLeft, ProjectSectionRight }