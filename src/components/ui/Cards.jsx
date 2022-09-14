import React from 'react'
import MotionComp from '../../animation/Motion'

const cardsType = {
  sm: 'card-sm',
  md: 'card-md',
  lg: 'card-lg'
}

/**
 * 
 * @param {String} size - card size. default: sm, values [sm, md, lg]
 * @param {String} customClass - custom tailwind classes for the components
 * @param {Boolean} animate - animation state, default : false
 * @returns react components
 */

function Card({ children, size = 'sm', customClass = '', animation = false }) {

  function handleType(size) {
    for (const card in cardsType) {
      if (size === card) {
        return cardsType[card]
      }
    }
  }

  if (animation) {
    return (
      <MotionComp
        animation={`mini-${animation}`}
        gestures={{ type: 'hover', animation: "scale-in", scale: "sm" }}
        classes={`${handleType(size)} ${customClass}`}>
        {children}
      </MotionComp>
    )
  }

  return (
    <div className={`${handleType(size)} ${customClass}`}>{children}</div>
  )

}

export default Card