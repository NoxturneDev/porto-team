import React, { useEffect } from "react";
import luxy from "luxy.js"

function useSmoothScroll() {
    const init = () => {
        luxy.init()

        luxy.settings.wrapperSpeed = 0.02
    }

    useEffect(() => {
        init()
    }, [])
}


export default useSmoothScroll