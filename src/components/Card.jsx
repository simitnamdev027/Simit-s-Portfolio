{/*import React from 'react'
import { GoArrowRight } from "react-icons/go";

function Card({item, index}) {
  return (
    <div style={{
            transitionDuration: ".3s",
            TransitionTimingFunction: "ease-in-out"
        }} className={`${index === 0 ? "w-[35%]" : "w-[70%]"} ${index === 0 ? "hover:shadow-[0px_0px_4vw_#3B0764] hover:bg-purple-950" : "hover:shadow-[0px_0px_4vw_#6B21A8] hover:bg-purple-800"} flex flex-col justify-between bg-zinc-700 text-white rounded-xl p-3`}>
        <div>
        <div className='flex justify-between items-center'>
            <h1 className='text-sm font-light'>{item.contact}</h1>
            <GoArrowRight />
        </div>
        <div className='w-full py-5'>
            <div className='w-48'>
                <h1 className='text-3xl'>{item.aboutUs}</h1>
            </div>
        </div>
        <h1 className='text-[4vw] font-medium pt-16'>{item.moto}</h1>
      </div>
      <div>
        {index === 0 ? (
            <h1 className='text-sm font-light text-zinc-400'>{item.motivation}</h1>
        ) : (
            <button className='border-2 p-2 text-lg rounded-full'>{item.btn}</button>
        )}
      </div>
    </div>
  )
}

export default Card */}

import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Card({ item, index }) {
  return (
    <div
      style={{
        transitionDuration: ".3s",
        transitionTimingFunction: "ease-in-out",
      }}
      className={`${
        index === 0 ? "w-[35%]" : "w-[70%]"
      } ${
        index === 0
          ? "hover:shadow-[0px_0px_4vw_#3B0764] hover:bg-purple-950"
          : "hover:shadow-[0px_0px_4vw_#6B21A8] hover:bg-purple-800"
      } flex flex-col justify-between bg-zinc-700 text-white rounded-xl p-3`}
    >
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-sm font-light">{item.contact}</h1>
          <GoArrowRight />
        </div>
        <div className="w-full py-5">
          <div className="w-48">
            <h1 className="text-3xl">{item.aboutUs}</h1>
          </div>
        </div>
        <h1 className="text-[4vw] font-medium pt-16">{item.moto}</h1>
      </div>
      <div>
        {index === 0 ? (
          <h1 className="text-sm font-light text-zinc-400">{item.motivation}</h1>
        ) : (
          <a
            href="https://github.com/simitnamdev027"  
            target="_blank"
          
          >
            <button className="border-2 p-2 text-lg rounded-full">
              {item.btn}
            </button>
          </a>
        )}
      </div>
    </div>
  );
}

export default Card;

