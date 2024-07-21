import React, { useRef } from 'react'

function SnakeBar({text}) {
  if (text !== undefined) {
    return (
      <div className=' fixed bottom-10 left-10 z-50 w-[200px] flex justify-center items-center h-10 bg-gray4 rounded-2xl'>
          <p className="text-white font-medium">The Card is {text}. </p>
      </div>
    )
  }
}

export default SnakeBar
