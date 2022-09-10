import React from 'react'
import MotionComp from '../animation/Motion'
import Text from './Text'

/**
 * 
 * @param {String} custom - custom tailwind classes for the components
 * @param {boolean} animate - default : false - animation state, return framer motion components if true
 * @returns react components
 */

function Paragraph({ children, customClass = '', animation, align = "left", size = "md" }) {

  if (animation) {
    return (
      <MotionComp
        animation={`mini-${animation}`}>
        <Text customClass={`paragraph text-${align} ${customClass}`}>
          {children}
        </Text>
      </MotionComp>
    )
  }

  return (
    <Text customClass={`paragraph text-${align} ${customClass}`}>
      {children}
    </Text>
  )
}

export default Paragraph