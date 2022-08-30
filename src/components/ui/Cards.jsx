import React from 'react'
import MotionComp from '../../animation/Motion'

const cardsType = {
  sm: 'card-sm',
  md: 'card-md',
  lg: 'card-lg'
}

/**
 * 
 * @param {String} children - component's children
 * @param {String} size - card size. default: sm, values [sm, md, lg]
 * @param {String} custom - custom tailwind classes for the components
 * @param {Boolean} animate - animation state, default : false
 * @returns 
 */

function Card({ children, size = 'sm', custom = '', animate = false }) {

  function handleType(size) {
    for (const card in cardsType) {
      if (size === card) {
        return cardsType[card]
      }
    }
  }

  if (animate || animate === "true") {
    return (
      <MotionComp animation="mini-fade-up" gestures="hover" gesturesAnimation="scale-in" classes={`${handleType(size)} ${custom}`}>
        {children}
      </MotionComp>
    )
  }

  return (
    <div className={`${handleType(size)} ${custom}`}>{children}</div>
  )

}

export default Card