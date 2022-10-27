import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Thumbnail from '../../assets/img/thumbnail_project.png'
import { Container, ContainerRef, Wrapper } from '../../components/layout/Container'
import Sphere from "../../components/Sphere";
import Header from "../../components/Header"
import Text from "../../components/Text"
import Line from "../../components/Line"
import ProjectSlide from "./ProjectSlide";
import Nav from "../../components/Nav"

function Project() {
  const line = useRef(null)
  const container = useRef(null)

  // base index for scrolling
  let i = 0
  const sideScroll = (e) => {
    e.preventDefault()
    const y = e.deltaY,
      offsetX = container.current.scrollWidth - container.current.firstChild.offsetWidth
    let scrollSpeed = 50

    console.log(container.current.scrollLeft)
    // // scroll right
    if (y === 100) {
      // right offset scroll, if true stop the scroll
      if (window.scrollX >= offsetX) return

      i++
      window.scrollTo(i * scrollSpeed, 0)
      // container.current.scrollLeft += i * scrollSpeed
    }
    // scroll left
    if (y === -100) {
      // left offset scroll, if true stop the scroll
      if (window.scrollX === 0) return

      i--
      window.scrollTo(i * scrollSpeed, 0)
      // container.current.scrollLeft += i * scrollSpeed
    }

  }

  useEffect(() => {
    // line animation
    gsap.fromTo(line.current, { width: 0 }, { width: '100%', yoyo: true, repeat: -1, ease: 'power2.out', duration: 1 })

    const scrollContainer = container.current
    // trigger side scrolling
    scrollContainer.addEventListener('wheel', (e) => {
      sideScroll(e)
    }, { passive: false })

    return () => {
      scrollContainer.removeEventListener('wheel', (e) => {
        sideScroll(e)
      }, { passive: false })
    }
  }, [container])

  const desc = {
    one: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    two: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    three:
      "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    four: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    five: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
  };

  return (
    <>
      <section className="container-flex-l min-w-max max-h-screen h-screen  bg-radial-dark text-main-200 overflow-y-hidden" ref={container}>
        {/* project page opener */}
        <div className="container-flex-col w-screen">
          <Sphere customClass="my-10" />
          <Header customClass="absolute w-fit" headerSize="mega">
            WHAT WE'VE <span className="text-main-200">MADE</span>
          </Header>
          {/* navigation line */}
          <div className="container-flex">
            <Text textSize="md" customClass="mr-5">SCROLL</Text>
            <div className="w-[7rem] overflow-hidden">
              <hr className="border border-main-200 " ref={line} />
            </div>
          </div>
        </div>
        {/* project showcase */}
        <ProjectSlide />
        <ProjectSlide />
        <ProjectSlide />
      </section >
    </>
  );
}

export default Project;
