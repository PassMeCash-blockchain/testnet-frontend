import React from 'react'
import Button from '../atoms/Button'

const ButtonRequest = () => {
  return (
      <div className='flex gap-2'>
          <Button className={`w-40`} filled={true}>Swap Coins</Button>
          <Button className={`w-40`} filled={false}>Request Funds</Button>
     </div>
  )
}

export default ButtonRequest