import React from 'react'
 
const button = ({className,children}) => {
  return (
      <button className={`${className} rounded-md`}>{ children}</button>
  )
}

export default button