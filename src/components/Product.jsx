{/* import React from 'react'
import ButtonComp from './ButtonComp'

function Product({item, handlePos, index}) {
  return (
    <div onMouseEnter={() => handlePos(index)} style={{
        transitionDuration: ".3s",
        msTransitionTimingFunction: "ease-in-out"
    }} className='w-full h-[23rem] hover:bg-purple-950 hover:shadow-[0px_0px_4vw_#3B0764]'>
      <div className='max-w-screen-xl mx-auto py-20 flex justify-between items-center text-white'>
        <h1 className='text-ellipsis overflow-hidden whitespace-nowrap leading-none text-[3vw] font-medium'>{item.name}</h1>
        <div className='w-1/3'>
            <div className='w-3/4'>
                <p className='mb-5'>{item.desc}</p>
                <div className='flex gap-3'>
                    {item.live && <ButtonComp
                        title= "Live Website"
                    />}
                    {item.case && <ButtonComp 
                        title= "Case Study"
                    />}
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Product */}

import React from 'react'
import ButtonComp from './ButtonComp'

function Product({item, handlePos, index}) {
  return (
    <div onMouseEnter={() => handlePos(index)} style={{
        transitionDuration: ".3s",
        msTransitionTimingFunction: "ease-in-out"
    }} className='w-full h-[23rem] hover:bg-purple-950 hover:shadow-[0px_0px_4vw_#3B0764]'>
      <div className='max-w-screen-xl mx-auto py-20 flex justify-between items-center text-white'>
        <h1 className='text-ellipsis overflow-hidden whitespace-nowrap leading-none text-[2vw] font-medium max-w-[calc(100%-200px)]'>{item.name}</h1>
        <div className='w-1/3'>
            <div className='w-3/4'>
                <p className='mb-5'>{item.desc}</p>
                <div className='flex gap-3'>
                    {item.live && <ButtonComp
                        title="Github link"
                    />}
                    {item.case && <ButtonComp 
                        title="live link"
                    />}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product

