// FRAMER MOTION
import { motion } from 'framer-motion'
import React from 'react'
export class Motion {
    constructor(variants) {
        this.variants = variants
    }

    components(children) {
        return (
            <motion.div
                variants={this.variants}
                // exit={this.exit}
                animate="visible"
                initial="hidden"
            >
                {children}
            </motion.div>)
    }
}