import React from 'react'
import MotionComp from '../animation/Motion'
/**
 * 
 * @param {String} custom - custom tailwind classes for the components
 * @param {boolean} animate - default : false - animation state, return framer motion components if true
 * @returns react components
 */

function Paragraph({ children, custom = '', animation, align = "left", size = "md"}) {

  if (animation) {
    return (
      <MotionComp
      animation={`mini-${animation}`}
      classes={`paragraph font-satoshi text-${size} ${custom} text-${align}`}>
        {children}
      </MotionComp>
    )
  }

  return (
    <p className={`paragraph font-satoshi text-${size} ${custom} text-${align}`}>{children}</p>
  )
}

export default Paragraph