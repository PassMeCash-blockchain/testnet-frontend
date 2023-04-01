import React from 'react'

const Text = ({Children,className}) => {
  return (
      <p className={`${className}` }>{ Children }</p>
  )
}

export default Text