
const transitions = {
    spring: {
        normal: {
            type: "spring",
            mass: 0.5
        },
        fast: {
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

// FRAMER MOTION VARIANTS
const fade = {
    left: {
        hidden: { opacity: 0, x: '-100%' },
        visible: {
            opacity: 1, x: 0,
            transition: { ...transitions.spring.normal }
        },
        exit: { opacity: 0, x: '-100%' },
    },
    right: {
        hidden: { opacity: 0, x: '100%' },
        visible: {
            opacity: 1, x: 0,
            transition: { ...transitions.spring.normal }
        },
        exit: { opacity: 0, x: ' 100%' }
    },
    up: {
        hidden: { opacity: 0, y: '-100%' },
        visible: {
            opacity: 1, y: 0,
            transition: { ...transitions.spring.normal }
        },
        exit: { opacity: 0, y: '-100%' }
    },
    bottom: {
        hidden: { opacity: 0, y: '100%' },
        visible: {
            opacity: 1, y: 0,
            transition: { ...transitions.spring.normal }
        },
        exit: { opacity: 0, y: '100%' }
    },
}

const mini = {
    fade: {
        left: {
            hidden: { opacity: 0, x: -20 },
            visible: {
                opacity: 1, x: 0,
                transition: {
                    ...transitions.spring.normal
                }
            },
            exit: { opacity: 0, x: -20 }
        },
        right: {
            hidden: { opacity: 0, x: 20 },
            visible: {
                opacity: 1, x: 0,
                transition: {
                    ...transitions.spring.normal
                }
            },
            exit: { opacity: 0, x: 20 }
        },
        top: {
            hidden: { opacity: 0, y: 20 },
            visible: {
                opacity: 1, x: 0,
                transition: {
                    ...transitions.spring.normal
                }
            },
            exit: { opacity: 0, y: 20 }
        },
        bottom: {
            hidden: { opacity: 0, y: -20 },
            visible: {
                opacity: 1, x: 0,
                transition: {
                    ...transitions.spring.normal
                }
            },
            exit: { opacity: 0, y: -20 }
        }
    }
}


const slide = {
    left: {
        hidden: { x: '-100%' },
        visible: { x: 0 },
        exit: { x: '-100%' }
    },
    right: {
        hidden: { x: '100%' },
        visible: { x: 0 },
        exit: { x: '100%' }
    },
    up: {
        hidden: { y: '-100%' },
        visible: { y: 0 },
        exit: { y: '-100%' }
    },
    bottom: {
        hidden: { y: '100%' },
        visible: { y: 0 },
        exit: { y: '100%' }
    },
}

const animations = {
    fade,
    slide,
    mini
}

export { animations, gestures, transitions }

// TODO : DYNAMIC TRANSITION, SMOOTHER ANIMATION, CUSTOM ANIMATION FUNCTION, //GESTURES