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
    <div style={{overflowX : 'hidden'}}>
      <Nav />
      <div className="font-bold text-center ">
        <h1 className="tracking-[.25em] header-lg">PROJECTKU</h1>
      </div>
      <ProjectSectionLeft
        img="../assets/image/23.png"
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
      <ProjectSectionRight
        img="../assets/image/23.png"
        title="ANTAR MEDIKA PAGE"
        desc={desc.four}
        url="https://antarmedika.com/"
        animation
      />
      <ProjectSectionLeft
        img="../assets/image/23.png"
        title="ANTAR MEDIKA LANDING PAGE"
        desc={desc.five}
        url="https://antarmedika.com/"
        animation
      />
      <Caraousel />
      <Footer />

    </div>
  );
}

export default Project;
