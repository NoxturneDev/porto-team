
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

const scale = {
    in: [0.5, 0.7, 0.8, 0.9],
    out: [1.1, 1.2, 1.3, 1.5]
}


const gestures = {
    tap: {
        scale: {
            in: {
                sm: { scale: scale.in[3] },
                md: { scale: scale.in[2] },
                lg: { scale: scale.in[1] },
                xl: { scale: scale.in[0] }
            },
            out: {
                sm: { scale: scale.out[3] },
                md: { scale: scale.out[2] },
                lg: { scale: scale.out[1] },
                xl: { scale: scale.out[0] }
            }
        }
    },
    hover: {
        scale: {
            in: {
                sm: { scale: scale.in[3] },
                md: { scale: scale.in[2] },
                lg: { scale: scale.in[1] },
                xl: { scale: scale.in[0] }
            },
            out: {
                sm: { scale: scale.out[3] },
                md: { scale: scale.out[2] },
                lg: { scale: scale.out[1] },
                xl: { scale: scale.out[0] }
            }
        }
    },
}

function initVariants(obj) {
    const { init, start, exit, transition } = obj

    const variants = {
        hidden: init,
        visible: {
            ...start,
            ...transition 
        },
        exit: exit,
        set custom(value) {
            this.visible = {
                ...start,
                ...value
            }
        }
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
    }),
    right: initVariants({
        init: { opacity: 0, x: '-100%' },
        start: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%' },
        transition: { ...transitions.spring.normal },
    }),
    up: initVariants({
        init: { opacity: 0, x: '-100%' },
        start: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%' },
        transition: { ...transitions.spring.normal },
    }),
    bottom: initVariants({
        init: { opacity: 0, x: '-100%' },
        start: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: '-100%' },
        transition: { ...transitions.spring.normal },
    }),
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

export { animations, gestures }

// TODO : DYNAMIC TRANSITION, SMOOTHER ANIMATION, CUSTOM ANIMATION FUNCTION, //GESTURES