import React, { useState, useEffect, useRef } from 'react'

function Sphere({ children, customClass, size = 400, pink}) {
    const [deg, setDeg] = useState(70)
    const sphere = useRef(null)

    return (
        <div
            ref={sphere}
            className={`w-[500px] h-[500px] rounded-full shadow-md ${customClass}`}
            style={{
                background: `linear-gradient(${deg}deg, ${pink ?  '#600040, #DB0F97' :'#282828, #161616' }`
            }}
        >
            {children}
        </div>
    )
}

export default Sphere