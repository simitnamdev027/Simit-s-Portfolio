import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react'

function Products() {


    const productData = [
        {
            name: "Demo-portfolio",
            desc: "Tech Stack: HTML, CSS. A clean, modern portfolio showcasing my projects, built using HTML and CSS. The design is fully responsive, ensuring a seamless experience on both desktop and mobile devices. It highlights my skills and projects with easy navigation and a professional layout.",
            live: true,
            case: true
        },
        {
            name: "FocusBoard",
            desc: "Tech Stack: React.js, Redux Toolkit, Material-UI. Developed a Task Management Dashboard with a Kanban-style layout to organize tasks efficiently. Focused on intuitive design and seamless functionality for improved productivity across projects",
            live: true,
            case: true
        },
        {
            name: "Music Player",
            desc: " Tech Stack: ReactJS, Tailwind CSS, React Router, Context API. Created a modern and sleek music player web application using ReactJS. Focused on responsive design to ensure a seamless experience across both desktop and mobile devices.",
            live: true,
            case: false
        },
        {
            name: "Pinterest-Clone",
            desc: " Tech Stack: EJS, Tailwind CSS, Node.js, Express Js, MongoDB, Mongoose, Multer, Passport. Created a Pinterest-inspired web app with image uploads and user authentication. Using EJS and Tailwind CSS, I built a responsive design. The backend was powered by Node.js, Express.js, MongoDB, and Mongoose, with Multer for file handling and Passport for secure authentication.",
            live: true,
            case: false
        }
    ]

    const [pos, setPos] = useState(0)

    const handlePos = (val) => {
        setPos(val)
    }

  return (
    <div className=' my-52 relative'>
      <div>
        {productData.map((item, index) => (
            <Product 
                key={index}
                item={item}
                index={index}
                handlePos={handlePos}
            />
        ))}
      </div>
      <div className='absolute w-full h-full top-0 pointer-events-none'>
        <motion.div initial={{y: pos, x: "-50%"}} animate={{y: pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .6}} className='h-[23rem] w-[30rem] bg-white absolute left-[46.5%] -translate-x-[50%] rounded-lg overflow-hidden'>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-300 '> 
            <video 
    src="/demo portfolio .mp4" 
    muted 
    autoPlay 
    loop 
    className="w-full h-full object-cover"
  />
            </motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-400 '> 
            <video 
    src="/focusboard video.mp4" 
    muted 
    autoPlay 
    loop 
    className="w-full h-full object-cover"
  />
            </motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-500 '> 
            <video 
    src="/spotify video.mp4" 
    muted 
    autoPlay 
    loop 
    className="w-full h-full object-cover"
  />
            </motion.div>
            <motion.div initial={{y: pos,}} animate={{y: -pos*23 + `rem`}} transition={{ease: [0.76, 0, 0.24, 1], duration: .5}} className='h-full w-full bg-green-600 '> 
            <video 
    src="/pinterst clone video.mp4" 
    muted 
    autoPlay 
    loop  
    className="w-full h-full object-cover"
  />
            </motion.div>


        </motion.div>
      </div>
    </div>
  )
}

export default Products
