import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import animations from './variants.js'

/**
 * 
 * @param {String} animation - animation type for the components. values "{animation name}-{direction}", ex : 'fade-left'
 * @param {Object} children - component's children 
 * @returns framer motion components
 */

const variantList = {
    'fade-left': animations.fade.left,
    'fade-right': animations.fade.right,
    'fade-up': animations.fade.up,
    'fade-bottom': animations.fade.bottom,
    'slide-left': animations.slide.left,
    'slide-right': animations.slide.right,
    'slide-up': animations.slide.up,
    'slide-down': animations.slide.bottom,
}

function MotionComp({ children, animation, transition }) {

    const variants = () => {
        for (const variant in variantList) {
            if (animation === variant) {
                const obj = variantList[animation]

                if (transition) {
                    obj.visible.transition = transition
                }

                console.log(obj )
                return obj
            }
        }
    }

    return (
        <AnimatePresence exitBeforeEnter mode='wait'>
            <motion.div
                variants={variants()}
                exit="exit"
                animate="visible"
                initial="hidden"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default MotionComp