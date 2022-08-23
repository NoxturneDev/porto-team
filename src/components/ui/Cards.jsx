import React from 'react'
import { motion } from 'framer-motion'
const cardsType = {
  sm: 'card-sm',
  md: 'card-md',
  lg: 'card-lg'
}
function Cards({ type, custom, children, animate }) {

  function handleType(type) {
    switch (type) {
      case 'sm':
        return cardsType.sm
      case 'md':
        return cardsType.md
      case 'lg':
        return cardsType.lg
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