// FRAMER MOTION VARIANTS
export const fade = {
    in: {
        left: {
            hidden: { opacity: 0, x: '-100%' },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: 'tween',
                    duration: 0.8,

                }
            },
            exit: { opacity: 0 }
        },
        right: {
            hidden: { opacity: 0, x: '100%' },
            visible: { opacity: 1, x: 0 },
            exit: { opacity: 0 }
        },
        up: {
            hidden: { opacity: 0, y: '-100%' },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0 }
        },
        bottom: {
            hidden: { opacity: 0, y: '100%' },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0 }
        }
    },

    //OUT
    out: {
        left: {
            hidden: { opacity: 0, x: 0 },
            visible: {
                opacity: 1,
                x: '-100%',
                transition: {
                    type: 'tween',
                    duration: 0.8,
                }
            },
            exit: { opacity: 0 }
        },
        right: {
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: '100%' },
            exit: { opacity: 0 }
        },
        up: {
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: '100%' },
            exit: { opacity: 0 }
        },
        bottom: {
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: '-100%' },
            exit: { opacity: 0 }
        }
    }
}

// TODO : DYNAMIC TRANSITION, SMOOTHER ANIMATION, CUSTOM ANIMATION FUNCTION