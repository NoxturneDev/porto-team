import React from "react";
import Nav from "../components/Nav";
import {
  ProjectSectionLeft,
  ProjectSectionRight,
} from "../components/project/ProjectSection";
import Caraousel from "../components/caraousel/Caraousel";
import Footer from "../components/Footer";

function Project() {
  const desc = {
    one: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    two: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    three:
      "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    four: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    five: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
  };
  return (
    <div style={{ overflowX: "hidden" }} className=" bg-astro-purple-300">
      <Nav />
      <div className="font-bold text-center container-flex-col-b mt-20 h-[20vh]  text-yellow-300">
        <h1 className="tracking-[.25em] header-lg">OUR PROJECTS</h1>
        <div className=" bg-astro-purple-100 w-[28em] h-[5px] flex  inset-x-20 rounded-full">
          {/* <div className="border border-red-500"></div> */}
        </div>
      </div>
      <ProjectSectionLeft
        img="../assets/image/antarmedika.png"
        title="ANTAR MEDIKA LANDING PAGE"
        desc={desc.one}
        url="https://antarmedika.com/"
        animation
      />
      <ProjectSectionRight
        img="../assets/image/23.png"
        title="ANTAR MEDIKA PAGE"
        desc={desc.two}
        url="https://antarmedika.com/"
        animation
      />
      <ProjectSectionLeft
        img="../assets/image/23.png"
        title="ANTAR MEDIKA LANDING PAGE"
        desc={desc.three}
        url="https://antarmedika.com/"
        animation
      />
      <Caraousel />
      <Footer />
    </div>
  );
}

export default Project;
