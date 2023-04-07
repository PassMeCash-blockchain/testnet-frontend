import React from 'react'
 
const Button = ({className,children}) => {
  return (
      <button className={`${className} rounded-md`}>{ children}</button>
  )
}

export default Button