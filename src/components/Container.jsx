import React from 'react'


const containerType = {
    center: 'container-flex',
    right: 'container-flex-r',
    left: 'container-flex-l',
    col: {
        center: 'container-flex-col',
        top: 'container-flex-col-t',
        bot: 'container-flex-col-b'
    }
}


export function Container({ children, custom, full /*: boolean */, type }) {

    function handleType(type) {
        switch (type) {
            case 'col-bot':
                return containerType.col
            case 'col-top':
                return containerType.col.top
            case 'col-center':
                return containerType.col.center
            case 'left':
                return containerType.left
            case 'right':
                return containerType.right
            default:
                return containerType.center
        }
    }

    return (
        <div className={`${handleType(type)} ${full ? 'h-screen w-screen' : 'h-full w-full'} ${custom}`}>
            {children}
        </div>
    )
}
