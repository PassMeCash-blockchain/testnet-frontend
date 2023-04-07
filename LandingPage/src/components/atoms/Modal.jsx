import React from 'react'

const Modal = ({className,children}) => {
  return (
      <div className='fixed bg-slate-400 w-screen h-screen grid place-items-center'>
          <div className={`${className} rounded-lg w-[456px] bg-white`}>{ children}</div>
      </div>
    
      
  )
}

export default Modal