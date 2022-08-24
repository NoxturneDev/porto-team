import React from 'react'
import { motion } from 'framer-motion'

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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 1 }}
        className={`${handleType(size)} ${custom}`}>{children}
      </motion.div>
    )
  }

  return (
    <div className={`${handleType(size)} ${custom}`}>{children}</div>
  )

}

export default Card