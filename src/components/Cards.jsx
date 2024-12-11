import React from 'react'
import Card from './Card'

function Cards() {

    const cardData = [
        {
            contact: "up next: Culture",
            aboutUs: "who I am",
            moto: "",
            motivation: "",
            btn: ""
        },
        {
            contact: "get in touch",
            aboutUs: "let's get to it, together.",
            moto: "More about my projects!",
            motivation: "",
            btn: "Github link"
        },
    ]


  return (
    <div className='w-full'>
      <div className='max-w-screen-xl mx-auto py-32 flex gap-1'>
        {cardData.map((item, index) => (
            <Card 
                key={index}
                item={item}
                index={index}
            />
        ))}
      </div>
    </div>
  )
}

export default Cards
