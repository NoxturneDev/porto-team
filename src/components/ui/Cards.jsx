import React from 'react'
import { motion } from 'framer-motion'

const cardsType = {
  sm: 'card-sm',
  md: 'card-md',
  lg: 'card-lg'
}

function Cards({ type, custom, children, animate }) {

  function handleType(type) {
    for (const card in cardsType) {
      if (type === card) {
        return cardsType[card]
      }
    }
  }

  if (!animate) {
    return (
      <div className={`${handleType(type)} ${custom}}`}>{children}</div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1 }}
      className={`${handleType(type)} ${custom}}`}>{children}
    </motion.div>
  )
}

export default Cards