import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Container, ContainerRef, Wrapper } from '../../components/layout/Container'
import Sphere from "../../components/Sphere";
import HeaderMarquee from "../../animation/HeaderMarquee";
import Text from "../../components/Text";

function Project() {
  const line = useRef(null)
  const ref = React.createRef()

  const scrollDetection = () => {
    const offset =  ref.current.offsetTop + 13
    if (window.scrollY === offset) {
      // side scrollin enabled
    }
    console.log(window.scrollY)
    console.log(offset)
  }
  useEffect(() => {
    // line animation
    gsap.fromTo(line.current, { width: '0' }, { width: '6rem', duration: 1, repeat: -1, yoyo: true })

    // scroll detection
    // trigger side scrolling
    window.addEventListener('wheel', () => {
      scrollDetection()
    })

    return () => {
      window.removeEventListener('wheel', () => {
        scrollDetection()
      })
    }
  }, [])

  const desc = {
    one: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    two: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    three:
      "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    four: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
    five: "AntarMedika merambah bisnis Teknologi informasi dibidang palayanan jasa kesehatan, mulai dari aplikasi manajemen,perangkat,fasilitas kesehatan,konsultan, dan SDM.",
  };
  return (
    <div style={{ overflowX: "hidden" }} className=" bg-dark-400 relative">
      <Wrapper>
        <HeaderMarquee>
          PROJECT-PROJECT-PROJECT-PROJECT
        </HeaderMarquee>
      </Wrapper>
      <ContainerRef direction="column" ref={ref}>
        <Sphere />
        <Wrapper customClass="w-48">
          <Text textSize="md" customClass="text-pink-600 mx-6 grow">Scroll</Text>
          <div className="my-10 w-48 font-bold tracking-[14px] text-pink-600">
            <hr className="my-4 h-1 bg-pink-600 rounded border-0" ref={line} />
          </div>
        </Wrapper>
      </ContainerRef>
    </div>
  );
}

export default Project;
