import React from 'react'

function Image({ url, alt, rounded = false, size, circle = false /* boolean */ }) {

  const imgType = {
    sm: {
      basic: 'img-sm',
      rounded: 'img-rounded-sm',
      circle: 'img-sm rounded full'
    },
    md: {
      basic: 'img-md',
      rounded: 'img-rounded-md',
      circle: 'img-md rounded full'
    },
    lg: {
      basic: 'img-lg',
      rounded: 'img-rounded-lg',
      circle: 'img-lg rounded full'
    },
  }
  function handleType(size) {
    for (const imgSize in imgType) {
      if (size === imgSize) {
        // console.log(imgType[size].rounded)
        return imgType[imgSize].basic
      }
    }
  }

  return (
    <img src="../../assets/23.png" alt={alt} className={`${handleType(size)}`} />
  )
}

export default Image