import React from "react";
import { Wrapper } from "../Container";
import Paragraph from "../Paragraph";

function ProjectDesc({ title, url, desc, align }) {
  return (
    <Wrapper custom="h-4/4 text-slate-200" dir="column" align={align}>
      <h2 className="header-sm text-slate-200">{title}</h2>
      <div className="my-5 ">
        <Paragraph
          custom=" subpixel-antialiased tracking-widest text-size"
          align={align}
          size="md"
        >
          {desc}
        </Paragraph>
      </div>
      <div className="my-5 text-[1.2rem] font-[800] underline tracking-[0.8em] font-satoshi text-yellow-500">
        <a href={url} target="blank">
          VIEW PROJECT
        </a>
      </div>
    </Wrapper>
  );
}

export default ProjectDesc;
