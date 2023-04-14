import React from 'react'

const Label = ({className,Children}) => {
  return (
      <label className={className}>{ Children}</label>
  )
}

export default Label