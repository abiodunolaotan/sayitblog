

import React from 'react'
import Button from './Button'

const Counter = ({count, onDecrement, onIncrement}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
        <div>
            Counter: {count}
        </div>

        <Button
        onClick={onIncrement}
        label="Increment"
        className="bg-blue-500 text-white pointer-"
        />

        <Button
        onClick={onDecrement}
        label="Decrement"
        className="bg-blue-500 text-white pointer-"
        />




    </div>
  )
}

export default Counter
