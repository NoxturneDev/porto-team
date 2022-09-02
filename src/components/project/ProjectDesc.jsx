import React from "react";
import {  Wrapper } from "../Container";
import Paragraph from "../Paragraph";

function ProjectDesc({ title, url, desc, align = "left" }) {
  return (
    <Wrapper custom="h-4/4 text-slate-200" dir="column" align={align}>
      <h2 className="header-sm text-slate-200">{title}</h2>
      <div className="my-5 ">
        <Paragraph custom="font-bold tracking-widest" align={align}>
          {desc}
        </Paragraph>
      </div>
      <div className="my-5 text-xl font-semibold tracking-widest underline">
        <a href={url} target="blank">
          VIEW PROJECT
        </a>
      </div>
    </Wrapper>
  );
}

export default ProjectDesc;
