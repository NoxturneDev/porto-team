import React from "react";
import MotionComp from "../../animation/Motion";

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

/**
 *
 * @param {String} customClass - Custom tailwind classes
 * @param {Boolean} type - default : primary fill, values : [primary, secondary]
 * @param {Boolean} animation - animation state. default : true (animation running) return framer motion components
 * @param {Boolean} fill - button fill style. default : true (filled button style). false = outline button style
 * @return react components
 * 
 */

function Button({ children = '', customClass, type = 'primary', animation, fill = true, }) {
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
  if (animation) {
    return (
      <MotionComp
        animation={`mini-${animation}`}
        gestures={{ type: "tap", animation: "scale-in", scale: "sm" }}
      >
        <button className={`${handleType(type)} ${customClass}}`}>
          {children}
        </button>
      </MotionComp>
    )
  }
  
  return (
    <button className={`${handleType(type)} ${customClass} `}>{children}</button>
  );
}

export default Button;
