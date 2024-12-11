{/*import React from 'react'

function stripe({item}) {

  return (
    <div className='w-[16.67vw] bg-zinc-100 flex justify-between items-center p-5 border-l-[1px] border-zinc-600'>
      <a href={item.url} alt="" ></a>
      <h1 className='font-bold text-xl'>{item.number}</h1>
    </div>
  )
}

export default stripe

import React from 'react';

function stripe({ item }) {
  return (
    <div className='w-[16.67vw] bg-zinc-100 flex justify-between items-center p-5 border-l-[1px] border-zinc-600'>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
        <img src={item.url} alt={item.number} className='w-8 h-8' />
        <h1 className='font-bold text-xl'>{item.number}</h1>
      </a>
    </div>
  );
}

export default stripe;
import React from 'react';

function stripe({ item }) {
  return (
    <div className='w-[16.67vw] bg-zinc-100 flex justify-between items-center p-5 border-l-[1px] border-zinc-600'>
      {item.url ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          <img src={item.url} alt={item.number} className='w-8 h-8' />
          <h1 className='font-bold text-xl'>{item.number}</h1>
        </a>
      ) : (
        <div className="flex items-center space-x-3">
          <h1 className='font-bold text-xl'>{item.number}</h1>
        </div>
      )}
    </div>
  );
}

export default stripe; */}

import React from 'react';

function stripe({ item }) {
  return (
    <div className='w-[16.67vw] bg-zinc-100 flex justify-between items-center p-5 border-l-[1px] border-zinc-600'>
      {item.link ? (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
          {item.url && <img src={item.url} alt="" className='w-8 h-8' />}
          <h1 className='font-bold text-xl'>{item.number}</h1>
        </a>
      ) : (
        <div className="flex items-center space-x-3">
          <h1 className='font-bold text-xl'>{item.number}</h1>
        </div>
      )}
    </div>
  );
}

export default stripe;



