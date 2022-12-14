import React from 'react'
import MotionComp from '../../animation/Motion'

/**
 * 
 * @param {String} url - path to image source
 * @param {String} alt - img alt properties
 * @param {String} type - type of the image. values = ["basic", "rounded", "circle"]
 * @param {String} size - default : sm, for image component size. values = [sm, md, lg]
 * @param {String} animation - animation for image components
 * @returns react components
 */

function Image({ url, alt, size = 'sm', type = 'basic', customClass = '', animation = "mini-fade-left" }) {

  const basicImg = {
    sm: 'img-sm',
    md: 'img-md',
    lg: 'img-lg',
    xl: 'img-xl'
  }

  const roundedImg = {
    sm: 'img-sm-rounded',
    md: 'img-md-rounded',
    lg: 'img-lg-rounded',
    xl: 'img-xl-rounded'
  }
  const circleImg = {
    sm: 'rounded-full w-32 h-32',
    md: 'rounded-full w-48 h-48',
    lg: 'rounded-full w-72 h-72',
    xl: 'rounded-full w-2/3 h2/3'
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

  if (animation) {
    return (
      <MotionComp animation={`mini-${animation}`}>
        <img src={url} alt={alt} className={`${handleType(type)} ${customClass}`} />
      </MotionComp>
    )
  }
  return (
    <img src={url} alt={alt} className={`${handleType(type)} ${customClass}`} />
  )
}

export default Image