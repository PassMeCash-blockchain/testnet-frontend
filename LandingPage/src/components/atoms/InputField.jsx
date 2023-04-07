import React from 'react'

const inputField = ({onChange,className,type}) => {
  return (
      <input type={type} className={ `${className}`} onchange={onChange} />
  )
}

export default inputField