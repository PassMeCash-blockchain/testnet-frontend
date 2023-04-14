import React from 'react'

const Label = ({className,children}) => {
  return (
      <label className={className}>{ children}</label>
  )
}

export default Label