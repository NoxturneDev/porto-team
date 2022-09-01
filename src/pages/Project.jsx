import React from "react";
import Nav from "../components/Nav";
import { ProjectSectionLeft, ProjectSectionRight } from "../components/project/ProjectSection";

function Project() {
  const description = ['lorem anjay mabar mantpa jiwa aiowdnaownd', 'aidnai aijn anjir keren banget ini gwa cokkks']
  return (
    <>
      <Nav />
      <div className="font-bold text-center ">
        <h1 className="tracking-[.25em] header-lg">PROJECTKU</h1>
      </div>
      <ProjectSectionLeft title="TITLE 1" url="/" img="../assets/23.png" desc={description} animation="true" />
      <ProjectSectionRight title="TITLE 2" url="/" img="../assets/23.png" desc={description} animation="true" />
      <ProjectSectionLeft title="TITLE 3" url="/" img="../assets/23.png" desc={description} />
      <ProjectSectionRight title="TITLE 4" url="/" img="../assets/23.png" desc={description} />
    </>
  );
}

export default Project;
