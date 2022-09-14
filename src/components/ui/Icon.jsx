import React from 'react'

export function Toggle({ w = 52, h = 52, color = "#1A1A1A", customClass }) {
    return (
        <svg className={`cursor-pointer fill-dark-300 hover:fill-main-100 ${customClass}`} width={w} height={h} viewBox="0 0 52 34" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 3H49M3 17H34.878M3 31H49" stroke={color} strokeWidth="5" strokeLinecap="round" />
        </svg>
    )
}

export function EmailBox({ w = 52, h = 52, color = "#1A1A1A", customClass }) {
    return (
        <svg className={customClass} width={w} height={h} viewBox="0 0 501 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M55.7779 0.600098H445.328C482.078 0.600098 500.6 17.9461 500.6 53.2261V300.774C500.6 335.76 482.078 353.4 445.328 353.4H55.7779C19.0279 353.4 0.505859 335.76 0.505859 300.774V53.2261C0.505859 17.9461 19.0279 0.600098 55.7779 0.600098ZM250.406 253.44L448.562 90.8581C455.618 84.9781 461.204 71.4541 452.384 59.4001C443.858 47.3461 428.276 47.0521 417.986 54.4021L250.406 167.886L83.1199 54.4021C72.8299 47.0521 57.2479 47.3461 48.7219 59.4001C39.9019 71.4541 45.4879 84.9781 52.5439 90.8581L250.406 253.44Z" fill={color} />
        </svg>

    )
}