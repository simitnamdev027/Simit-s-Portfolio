{/*import React from 'react';


import Stripe from './Stripe';


function stripes() {


    const stripeData = [
        {
          url: "https://www.cssdesignawards.com/imgs/logo.svg",
          number: "48"
        },
        {
          url: "",
          number: "Portfolio2024"
        },
        {
          url: "../assets/awards.png",
          number: "11"
        },
        {
          url: "https://www.cssdesignawards.com/imgs/logo.svg",
          number: "48"
        },
        {
          url: "../assets/no.jpg",
          number: "2"
        },
        {
          url: "https://www.instagram.com/simit_namdev/",
          number: "Instagram"
        },
      ]

  return (
    <div className='flex mt-24'>
      {stripeData.map((item, index) => (
        <Stripe key={index} item = {item} />
      ))}
    </div>
  )
}

export default stripes */}


import React from 'react';

import Stripe from './Stripe';

function stripes() {

    const stripeData = [
        {
          url: "https://cdn-icons-png.flaticon.com/512/174/174857.png", // LinkedIn logo
          number: "LinkedIn",
          link: "https://www.linkedin.com/in/simit-namdev-b2207624a/"
        },
        {
          url: "https://cdn-icons-png.flaticon.com/512/2111/2111468.png", // GitHub logo
          number: "GitHub",
          link: "https://github.com/simitnamdev027"
        },
        {
          url: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png", // Instagram logo
          number: "Instagram",
          link: "https://www.instagram.com/simit_namdev/"
        },
        {
          url: "",
          number: "",
          link: ""
        },
        {
          url: "",
          number: "",
          link: ""
        },
        {
          url: "",
          number: "Portfolio2024",
           link: ""
        },
      ];

  return (
    <div className='flex mt-24'>
      {stripeData.map((item, index) => (
        <Stripe key={index} item={item} />
      ))}
    </div>
  );
}

export default stripes;

