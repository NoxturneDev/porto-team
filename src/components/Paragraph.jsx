import React from 'react'
import MotionComp from '../animation/Motion'
/**
 * 
 * @param {String} children - component's children
 * @param {String} custom - custom tailwind classes for the components
 * @param {boolean} animate - default : false - animation state, return framer motion components if true
 * @returns react components
 */

function Paragraph({ children, custom = '', animation, align = "left" }) {

  if (animation) {
    return (
      <MotionComp
      animation={`mini-${animation}`}
      classes={`paragraph font-poppins ${custom} text-${align}`}>
        {children}
      </MotionComp>
    )
  }

  return (
    <p className={`paragraph font-poppins ${custom} text-${align}`}>{children}</p>
  )
}

export default Paragraph