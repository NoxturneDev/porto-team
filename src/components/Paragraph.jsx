import React from 'react'
import MotionComp from '../animation/Motion'
import Text from './Text'

/**
 * 
 * @param {String} customClass - custom tailwind classes for the components
 * @param {Boolean} animation - default : false - animation state, return framer motion components if true
 * @param {String} align - Text align inside the paragraph. values ["left", "right"]
 * @returns react components
 */

function Paragraph({ children, customClass = '', animation = false, align = "left" }) {

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