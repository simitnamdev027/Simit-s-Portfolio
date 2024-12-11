import React from 'react'

function Footer() {
  return (
    <div className='w-full text-white py-10'>
      <div className='max-w-screen-xl mx-auto flex justify-between'>
        <div className='footerL w-[45%]'>
            <h1 className='font-medium text-[4vw] leading-none'>Simit Namdev.</h1>
        </div>
        <div className='footerR w-[35%] flex justify-between'>
            <div className='flex flex-col font-light opacity-75 text-sm'>
                <h1 className='mb-16'>social</h1>
                {[
                    "instagram",
                    "linkedin",
                    "twitter (X)"
                ].map((item, index) => (
                    <a className='py-1' key={index} href="#">{item}</a>
                ))}
            </div>
            <div className='flex flex-col font-light opacity-75 text-sm'>
                <h1 className='mb-16'>sitemap</h1>
                {[
                    "home",
                    "work",
                    "careers",
                    "contact"
                ].map((item, index) => (
                    <a className='py-1' key={index} href="#">{item}</a>
                ))}
            </div>
            <div  className='w-2/5 flex flex-col justify-end items-center gap-5 '>
                <h1 className='font-light text-sm text-center'>Lorem aut cumque officia repellendus asperiores aliquam, necessitatibus odio dicta veniam autem.</h1>
                <button className='w-40 p-3 bg-purple-600 text-sm text-nowrap'>enterprice partner</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer