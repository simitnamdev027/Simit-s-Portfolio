import React from 'react'
import { BsArrow90DegRight } from "react-icons/bs";


function ButtonComp({title="Contact me"}) {
  return (
    <div className='flex justify-between items-center gap-8 px-5 py-2 rounded-full bg-zinc-100 cursor-pointer'>
      <span className='text-sm text-nowrap text-black'>{title}</span>
      <BsArrow90DegRight className='text-zinc-900'/>
    </div>
  )
}

export default ButtonComp
