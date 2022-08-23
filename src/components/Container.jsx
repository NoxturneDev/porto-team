import React, { useEffect } from 'react'


const containerType = {
    left: 'container-flex-l',
    right: 'container-flex-r',
    top: 'container-flex-col-t',
    bot: 'container-flex-col-b'
}

export function Container({ children, custom, full, type }) {

    function handleType(type) {
        switch (type) {
            case 'bot':
                return containerType.bot
            case 'top':
                return containerType.top
            case 'left':
                return containerType.left
            case 'right':
                return containerType.right
        }
    }

    // useEffect(() => {

    //     handleType('bot')
    // }, [])

    return (
        <div className={`
            ${handleType(type)} 
            ${full ? 'h-screen w-screen' : 'h-full w-full'} 
            ${custom} 
        `}>
            {children}
        </div>
    )
}
