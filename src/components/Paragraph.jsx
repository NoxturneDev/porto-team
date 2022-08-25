import React from 'react'
import { motion } from 'framer-motion'
/**
 * 
 * @param {String} children - component's children
 * @param {String} custom - custom tailwind classes for the components
 * @param {boolean} animate - default : false - animation state, return framer motion components if true
 * @returns react components
 */

function Paragraph({ children, custom = '', animate = false }) {

  if (animate || animate === "true") {
    return (
      <motion.p
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        className={`paragraph font-poppins ${custom}`}
      >
        {children}
      </motion.p>
    )
  }

  return (
    <p className={`paragraph font-poppins ${custom}`}>{children}</p>
  )
}

export default Paragraph