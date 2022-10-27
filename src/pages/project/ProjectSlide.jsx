import React from "react";
import Thumbnail from '../../assets/img/thumbnail_project.png'
import { Container, ContainerRef, Wrapper } from '../../components/layout/Container'
import Header from "../../components/Header"
import Text from "../../components/Text"
import Line from "../../components/Line"

function ProjectSlide() {
    return (
        <section className="h-screen w-screen container-flex shadow-md overflow-hidden" >
            <Wrapper customClass="w-full h-full" direction="column">
                {/* header section */}
                {/* <div className="w-full">
                    <Line>PROJECT / SHOWCASE </Line>
                </div> */}
                {/* project content */}
                <Wrapper customClass="grow w-full px-10 h-full ">
                    {/* project img */}
                    <div className="mx-5 min-w-sm w-full">
                        <img src={Thumbnail} alt="" className="w-full h-auto" />
                    </div>
                    {/* project desc */}
                    <div className="container-flex-col-b py-5 h-3/4 max-w-md text-right relative ">
                        {/* project name */}
                        <Header customClass="grow w-fit absolute tracking-[2rem] top-4 right-4" headerSize="lg">SPACESHIP</Header>
                        {/*  description*/}
                        <div className="container-flex-col-r w-full text-right h-max">
                            <a href="www.instagram.com" className="mb-6">View project site</a>
                            <Text customClass="text-white" textSize="sm">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos inventore vitae labore facere! Minima eum deserunt ab 
                            </Text>
                        </div>
                    </div>
                </Wrapper>
            </Wrapper>
        </section >
    )
}

export default ProjectSlide