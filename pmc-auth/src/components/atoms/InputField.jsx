import React from 'react'

const inputField = ({onChange,className,type, icon}) => {
  return (
      <input type={type} className={ `${className}`} onchange={onChange} />
  )
}

export default inputField