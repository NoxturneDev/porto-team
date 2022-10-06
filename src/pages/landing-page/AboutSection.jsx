import React from 'react'
import { motion } from 'framer-motion'
import { Section, Wrapper } from '../../components/layout/Container'
import Header from '../../components/Header'

const parentHoverAnimation = {
    hover: {
        backgroundColor: "#C20C86",
        transition: { duration: 1, type: "tween" }
    },
}
const childrenHoverAnimation = {
    initial: { opacity: 0 },
    hover: { opacity: 1 }
}
function AboutSection() {
    return (
        <Section direction="column" customClass="bg-radial-dark px-20" align='left'>
            <motion.div
                variants={parentHoverAnimation}
                whileHover="hover"
            >
                <Header headerSize="md" customClass="my-5">HALLOWEB IS A DIGITAL WEB SERVICE AGENCY</Header>
                {/* <motion.div
                    animate="hover"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima magnam debitis eum sequi ipsum sint dignissimos odit necessitatibus illo?</p>
                </motion.div> */}
            </motion.div>
            <motion.div
                variants={parentHoverAnimation}
                whileHover="hover"
            >
                <Header headerSize="md" customClass="my-5">HALLOWEB IS A DIGITAL WEB SERVICE AGENCY</Header>
                {/* <motion.div
                    animate="hover"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima magnam debitis eum sequi ipsum sint dignissimos odit necessitatibus illo?</p>
                </motion.div> */}
            </motion.div>
            <motion.div
                variants={parentHoverAnimation}
                whileHover="hover"
            >
                <Header headerSize="md" customClass="my-5">HALLOWEB IS A DIGITAL WEB SERVICE AGENCY</Header>
                {/* <motion.div
                    animate="hover"
                >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, minima magnam debitis eum sequi ipsum sint dignissimos odit necessitatibus illo?</p>
                </motion.div> */}
            </motion.div>
        </Section>
    )
}

export default AboutSection