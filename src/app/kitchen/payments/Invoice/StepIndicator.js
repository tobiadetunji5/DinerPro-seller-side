import React, { useState } from 'react'

const StepIndicator = ({stage, page}) => {

  const [highlight, setHighlight] = useState(false)

  return (
    // {/* the indicator container */}
  <div className='flex justify-center items-center w-full'>
      {/* the number and step title container */}
    <div className='ml-8'>
      <div className='rounded-full transition duration-500 ease-in-out border-2 border-zinc-400 h-12 w-12
      flex items-center justify-center py-3 text-black'>
        {/* the circle */}1
      </div>

      <div className='absolute text-center'>
  {/* i am step indicator */}
  {stage[page]}
      </div>
    </div>

      {/*for the line  */}
    <div className='flex-auto border-t-2 transition duration-500 ease-in-out border-t-primary'></div>
  </div>
  )
}

export default StepIndicator