import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animations, gestures } from './variants.js'

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

const gesturesList = {
    tap: {
        'scale-in': {
            sm: gestures.tap.scale.in.sm,
            md: gestures.tap.scale.in.md,
            lg: gestures.tap.scale.in.lg,
            xl: gestures.tap.scale.in.xl,
        },
        'scale-out': {
            sm: gestures.tap.scale.out.sm,
            md: gestures.tap.scale.out.md,
            lg: gestures.tap.scale.out.lg,
            xl: gestures.tap.scale.out.xl,
        }
    },
    hover: {
        'scale-in': {
            sm: gestures.hover.scale.in.sm,
            md: gestures.hover.scale.in.md,
            lg: gestures.hover.scale.in.lg,
            xl: gestures.hover.scale.in.xl,
        },
        'scale-out': {
            sm: gestures.hover.scale.out.sm,
            md: gestures.hover.scale.out.md,
            lg: gestures.hover.scale.out.lg,
            xl: gestures.hover.scale.out.xl,
        }
    }
}

function MotionComp({ children, animation, transition, gestures, gesturesAnimation, gesturesSize = "sm" }) {

    const selectOption = (select, obj, prop) => {
        for (const i in obj) {
            if (select === i) {

                if (prop) return obj[i][prop]

                return obj[i]
            }
        }
    }
    const variants = () => {
        for (const variant in variantList) {
            if (animation === variant) {
                const obj = variantList[animation]

                if (transition) {
                    obj.visible.transition = transition
                }

                console.log(obj)
                return obj
            }
        }
    }

    const handleGestures = (type) => {
        if (type === "tap") {
            return selectOption(gesturesAnimation, gesturesList.tap, gesturesSize)
        }
        if (type === "hover") {
            return selectOption(gesturesAnimation, gesturesList.hover, gesturesSize)
        }
    }

    return (
        <AnimatePresence exitBeforeEnter mode='wait'>
            <motion.div
                variants={variants()}
                exit="exit"
                animate="visible"
                initial="hidden"
                whileTap={gestures === "tap" ? handleGestures("tap") : ''}
                whileHover={gestures === "hover" ? handleGestures("hover") : ''}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default MotionComp