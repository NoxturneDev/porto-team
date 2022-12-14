import React from "react";
import { Wrapper } from "../../components/layout/Container";
import Image from "../../components/ui/Image";
import Section from "../Section";
import ProjectDesc from "./ProjectDesc";
import MotionComp from "../../animation/Motion";

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
      <Section custom="bg-dark-300">
        <Wrapper custom="shadow-2xl h-max h-2/4 p-2 ml-10 bg-blue-700 p-10 rounded-xl shadow-2xl">
          <Image
            url={img}
            custom="w-full h-auto"
            rounded={true}
            animate="true"
          />
        </Wrapper>
        <Wrapper custom="h-3/4 translate-x-[-8rem]">
          <MotionComp animation="fade-right">
            <ProjectDesc title={title} url={url} desc={desc} align="left" />
          </MotionComp>
        </Wrapper>
      </Section>
    );
  }

  return (
    <Section custom="bg-dark-300">
      <Wrapper custom="shadow-2xl p-0 h-max ml-10 ">
        <Image url={img} custom="h-auto w-full" rounded={true} />
      </Wrapper>
      <Wrapper custom="w-100 h-4/4 translate-x-[-8rem]">
        <ProjectDesc title={title} url={url} desc={desc} align="right" />
      </Wrapper>
    </Section>
  );
}

function ProjectSectionRight({ title = "TITLE", img, url, desc, animation }) {
  if (animation) {
    return (
      <Section custom="bg-dark-300">
        <Wrapper custom="w-100 h-2/4 translate-x-[8rem] z-10">
          <MotionComp animation="fade-left">
            <ProjectDesc title={title} url={url} desc={desc} align="right" />
          </MotionComp>
        </Wrapper>
        <Wrapper custom="shadow-2xl p-0 h-max mr-10  bg-blue-700 p-10 rounded-xl shadow-2xl">
          <MotionComp animation="fade-up">
            <Image url={img} custom="w-full h-auto" rounded={true} />
          </MotionComp>
        </Wrapper>
      </Section>
    );
  }

  return (
    <Section custom="bg-dark-300">
      <Wrapper custom="w-100 h-3/4 translate-x-[8rem]">
        <ProjectDesc title={title} url={url} desc={desc} align="right" />
      </Wrapper>
      <Wrapper custom="shadow-2xl h-max mr-10">
        <Image url={img} custom="h-auto w-full" rounded={true} />
      </Wrapper>
    </Section>
  );
}

export { ProjectSectionLeft, ProjectSectionRight };
