import React from 'react'

/**
 * 
 * @param {String} url - path to image source
 * @param {String} alt - img alt properties
 * @param {Boolean} rounded - default : false, for image rounded style
 * @param {Boolean} circle - default : false, for circular image style
 * @param {String} size - default : sm, for image component size. values = [sm, md, lg]  
 * @returns react components
 */

function Image({ url, alt, size = 'sm', type = 'basic', custom = '' }) {

  const basicImg = {
    sm: 'img-sm',
    md: 'img-md',
    lg: 'img-lg'
  }

  const roundedImg = {
    sm: 'img-rounded-sm',
    md: 'img-rounded-md',
    lg: 'img-rounded-lg'
  }
  const circleImg = {
    sm: 'img-sm rounded-full',
    md: 'img-md rounded-full',
    lg: 'img-lg rounded-full'
  }

  function handleType(type) {
    switch (type) {
      case 'basic':
        for (const sz in basicImg) {
          if (size === sz) {
            return basicImg[sz]
          }
        }
      case 'rounded':
        for (const sz in roundedImg) {
          if (size === sz) {
            return roundedImg[sz]
          }
        }
      case 'circle':
        for (const sz in circleImg) {
          if (size === sz) {
            return circleImg[sz]
          }
        }
    }

  }

  return (
    <img src={url} alt={alt} className={`${handleType(type)} ${custom}`} />
  )
}

export default Image