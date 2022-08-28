
const transitions = {
    spring: {
        normal: {
            type: "spring",
            mass: 0.5
        },
        heavy: {
            type: "spring",
            mass: 1.2,
            stiffness: 110
        },
        slow: {
            type: "spring",
            mass: 0.5,
            stiffness: 50
        }
    }
}


function initVariants(hidden, visible, exit, transition = transitions.spring.normal, time = {}) {
    return {
        hidden: hidden,
        visible: {
            ...visible,
            transition: { ...transition, ...time }
        },
        exit: exit
    }
}

// FRAMER MOTION VARIANTS
const fade = {
    left: initVariants(
        { opacity: 0, x: '-100%' }, { opacity: 1, x: 0 }, { opacity: 0, x: '-100%' }
    ),
    right: initVariants(
        { opacity: 0, x: '100%' }, { opacity: 1, x: 0 }, { opacity: 0, x: '100%' }
    ),
    up: initVariants(
        { opacity: 0, y: '-100%' }, { opacity: 1, y: 0 }, { opacity: 0, y: '-100%' }
    ),
    bottom: initVariants(
        { opacity: 0, y: '100%' }, { opacity: 1, y: 0 }, { opacity: 0, y: '100%' }
    ),
}

const slide = {
    left: initVariants(
        { x: '-100%' }, { x: 0 }, { x: '-100%' }, transitions.spring.heavy
    ),
    right: initVariants(
        { x: '100%' }, { x: 0 }, { x: '100%' }
    ),
    up: initVariants(
        { y: '-100%' }, { y: 0 }, { y: '-100%' }
    ),
    bottom: initVariants(
        { y: '100%' }, { y: 0 }, { y: '100%' }
    ),
}

const animations = {
    fade,
    slide
}

export default animations

// TODO : DYNAMIC TRANSITION, SMOOTHER ANIMATION, CUSTOM ANIMATION FUNCTION