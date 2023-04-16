import React from 'react'

const SectionSpacing = ({ children, className }) => {
    return (
        <div className={`px - 4 py-8 ${className}`}>
           {children}
        </div>
  )
}

export default SectionSpacing