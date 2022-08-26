import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Motion } from '../components/classes.js'
import { fade } from './variants.js'

function MotionComp({ variants, init, animate, exit, children, custom }) {
    const initAnim = new Motion(fade.in.right)
    const comp = initAnim.components(children)

    return (
        <AnimatePresence exitBeforeEnter>
            {comp}
        </AnimatePresence>
    )
}

export default MotionComp