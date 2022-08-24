import React from "react";
import { motion } from "framer-motion";

const buttonType = {
  fill: {
    primary: "button-primary",
    secondary: "button-secondary",
  },
  line: {
    primary: "button-primary-line",
    secondary: "button-secondary-line",
  },
};
//type : primary, secondary
// fill : true, false
function Button({
  children,
  custom,
  type = buttonType.primary.fill,
  animate,
  fill = true /*boolean */,
}) {
  function handleType(type) {
    if (!fill) {
      for (const button in buttonType.line) {
        if (type === button) return buttonType.line[button];
      }
    } else {
      for (const button in buttonType.fill) {
        if (type === button) return buttonType.fill[button];
      }
    }
  }

  // if animate is false, return without motion
  if (!animate) {
    return (
      <button className={`${handleType(type)} ${custom}`}>{children}</button>
    );
  }

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "tween" }}
      className={`${handleType(type)} ${custom}`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
