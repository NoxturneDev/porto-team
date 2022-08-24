import React from 'react'

/**
 * 
 * @param {String} children - components children
 * @param {String} custom - custom tailwind classes for the components
 * @param {Boolean} full - default : false, fullscreen size
 * @param {String} dir - default : row, values = [top, bot] 
 * @param {String} align - default : center, values [center, left, right, top, bot]
 * @returns react container components
 */


export function Container({ children, custom = '', full = false, align = 'center', dir = 'row' }) {

    const rowContainer = {
        center: 'container-flex',
        right: 'container-flex-r',
        left: 'container-flex-l',
        top : 'container-flex items-start',
        bot: 'container-flex items-end'
    }

    const colContainer = {
        center: 'container-flex-col',
        right: 'container-flex-col items-end',
        left: 'container-flex-col items-start',
        top : 'container-flex-col-t',
        bot: 'container-flex-col-b'
    }

    function handleType(dir) {
        switch (dir) {
            case 'row':{
                for(const al in rowContainer){
                    if(align === al){
                        return rowContainer[al]
                    }
                }
            }
            case 'column': {
                for(const al in colContainer){
                    if(align === al){
                        return colContainer[al]
                    }
                }
            }
        }
    }

    return (
        <div className={`${handleType(dir)} ${full ? 'h-screen w-screen' : 'h-full w-full'} ${custom}`}>
            {children}
        </div>
    )
}
