import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * 
 * @param {Object} variants - variants animation object for framer motion
 * @param {Object} children - component's children 
 * @returns framer motion components
 */

function MotionComp({ children, variants, custom }) {
    return (
        <AnimatePresence exitBeforeEnter mode='wait'>
            <motion.div
                variants={variants}
                exit="exit"
                animate="visible"
                initial="hidden"
                {...custom}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default MotionComp