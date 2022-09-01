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
 * @param {String} custom - custom tailwind classes for the components
 * @param {Boolean} animate - animation state, default : false
 * @returns 
 */

function Card({ children, size = 'sm', custom = '', animation }) {

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
        classes={`${handleType(size)} ${custom}`}>
        {children}
      </MotionComp>
    )
  }

  return (
    <div className={`${handleType(size)} ${custom}`}>{children}</div>
  )

}

export default Card