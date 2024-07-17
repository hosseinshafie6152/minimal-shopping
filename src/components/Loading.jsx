import React from 'react'

function Loading() {
  return (
    <div className='flex justify-center gap-x-2 items-center '>
      <p>loading</p>
      <div className='animate-spin h-5 w-5 mr-3 border border-dashed border-orange rounded-full ' >
      </div>
    </div>
  )
}

export default Loading