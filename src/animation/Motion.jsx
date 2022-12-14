import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { animations, gestures, transitions } from './variants.js'

const variantList = {
    'fade-left': animations.fade.left,
    'fade-right': animations.fade.right,
    'fade-up': animations.fade.up,
    'fade-bottom': animations.fade.bottom,
    'slide-left': animations.slide.left,
    'slide-right': animations.slide.right,
    'slide-up': animations.slide.up,
    'slide-down': animations.slide.bottom,
    'mini-fade-left': animations.mini.fade.left,
    'mini-fade-right': animations.mini.fade.right,
    'mini-fade-up': animations.mini.fade.up,
    'mini-fade-bottom': animations.mini.fade.bottom,
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

const transitionList = {
    spring: {
        slow: transitions.spring.slow,
        normal: transitions.spring.normal,
        fast: transitions.spring.fast
    },
    tween: {
        slow: transitions.tween.slow,
        normal: transitions.tween.normal,
        fast: transitions.tween.fast
    }
}
/**
 * 
 * @param {String} animation - animation type. values ['type-direction'], ex : ['fade-left]. possible type [fade, slide]
 * @param {Object} transition - an object of custom transition value. customize transition type and speed
 * @param {Object} gestures - gestures animation object, customize gesture type, scale, and animation
 * @param {String} classes - tailwind classes
 * @returns 
 */

function MotionComp({ children, animation, classes,
    transition = { type: 'spring', speed: "normal" },
    gestures = { type : '', animation: 'scale-in', scale: "sm" }}) {

    /**
     * 
     * @param {String} select - key value to select in corresponding object key
     * @param {Object} obj - target object to get the needed value
     * @param {String} prop - add on object key if the object has deep nesting
     * @returns 
     */

    // ? could be custom hook tho
    const selectOption = (select, obj, prop) => {
        
        /** @param { String } i - searched value inside target object */
        for (const i in obj) {
            if (select === i) {

                if (prop) return obj[i][prop]

                return obj[i]
            }
        }
    }

    const handleTransition = () => {
        if (transition.type === "spring") {
            return selectOption(transition.speed, transitionList.spring)
        }
        if (transition.type === "tween") {
            return selectOption(transition.speed, transitionList.tween)
        }

    }

    const variants = () => {
        for (const variant in variantList) {
            if (animation === variant) {
                const obj = variantList[animation]

                if (transition.type) {
                    obj.visible.transition = handleTransition()
                }

                return obj
            }
        }
    }

    const handleGestures = (type) => {
        if (type === "tap") {
            return selectOption(gestures.animation, gesturesList.tap, gestures.scale)
        }
        if (type === "hover") {
            return selectOption(gestures.animation, gesturesList.hover, gestures.scale)
        }
    }

    return (
        <AnimatePresence exitBeforeEnter mode='wait'>
            <motion.div
                variants={variants()}
                exit="exit"
                animate="visible"
                initial="hidden"
                whileTap={gestures.type === "tap" ? handleGestures("tap") : ''}
                whileHover={gestures.type === "hover" ? handleGestures("hover") : ''}
                className={`${classes}`}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default MotionComp