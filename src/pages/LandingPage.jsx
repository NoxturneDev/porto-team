import React from "react";
import Nav from "../components/Nav";
import { Container } from "../components/Container";
import Button from "../components/ui/Button";
import Card from "../components/ui/Cards"
import Image from "../components/ui/Image";
import Caraousel from "../components/caraousel/Caraousel";
import Section from "../components/Section";
import MotionComp from "../animation/Motion";
import JumbotronAnim from "../animation/JumbotronAnim";
import Footer from "../components/Footer";
// import ParticleAnimation from "../animation/ParticleAnimation";
import Contact from "./Contact";
import Text from "../components/Text";
function LandingPage() {
  return (
    <div style={{ overflowX: 'hidden' }} className="bg-astro-dark-100 relative">
      <Nav />
      <JumbotronAnim />
      <Caraousel></Caraousel>
      <Footer />
      <Contact />
      <Text >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem quasi perferendis, obcaecati voluptates placeat rerum aperiam. Voluptatum possimus ea quibusdam assumenda corrupti porro suscipit, amet voluptates quas distinctio perspiciatis accusamus excepturi voluptatibus sit voluptas doloribus libero facilis quis obcaecati, veniam dolores asperiores? Voluptates dolor pariatur enim ut, temporibus nam eaque eos tempora nobis sint quibusdam voluptatem reprehenderit reiciendis nihil repudiandae optio beatae debitis perspiciatis laudantium. Dignissimos at excepturi voluptate temporibus corporis, corrupti consequuntur quam explicabo consequatur ex maiores? Voluptatem, possimus eius laborum totam molestias necessitatibus temporibus porro numquam ab ea odit expedita, quidem odio? Accusantium distinctio magnam autem quidem!
      </Text>
    </div>
  );
}

export default LandingPage;