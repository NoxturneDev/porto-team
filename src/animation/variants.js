
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
    },
    tween: {
        normal: {
            type: "tween",
            duration: 1
        },
        slow: {
            type: "tween",
            duration: 2
        },
        fast: {
            type: "tween",
            duration: 0.5
        }
    }
}


function initVariants(obj) {
    const { init, start, exit, transition, time } = obj

    const variants = {
        hidden: init,
        visible: {
            ...start,
            transition: { ...transition, ...time }
        },
        exit: exit
    }

    return variants
}

// FRAMER MOTION VARIANTS
const fade = {
    left: initVariants({
        init: { opacity: 0, x: '-100%' },
        start: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%' },
        transition: { ...transitions.spring.normal },
        time: {
            duration: 1,
            delay: 2
        }
    }),
    right: {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1,
            x: '0',
            transition: { ...transitions.spring.normal }
        },
        exit: { opacity: 0, x: '100%' }
    },
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

// TODO : DYNAMIC TRANSITION, SMOOTHER ANIMATION, CUSTOM ANIMATION FUNCTION, GESTURES