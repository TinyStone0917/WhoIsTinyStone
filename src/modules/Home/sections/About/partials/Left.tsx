import React from 'react'
import { motion } from 'framer-motion'
import { IoMdArrowDropright } from 'react-icons/io'
//
import { skills } from '@modules/Home/config/constanst'
import { fadeTop, motionStep } from '@config/motion'


const Left = () => {

  // content
  const content = [
    "Hi, I am a frontend developer with 9 years of experience in Next.js, Vue, Tailwind CSS, Bootstrap, and so on.",
    "I have developed dozens of websites using Node, React, Express, Next.js, Vue, etc. Develop Pixel-Perfect Design and User-Friendly Website are my main skills.",
    "I'm very adept with CSS and can make specific or site-wide changes easily.",
    "Developing is my passion, and I love being able to do new projects and technologies and working with one client as long as possible.",
    "I can work 40 hours and more in a week, and working time is EST.",
    "Here are a few technologies I have been working with recently:"
  ]

  return (
    <motion.div variants={fadeTop} {...motionStep} className='col-span-3' >

      <div className='space-y-4 mt-7 text-slate-400' >

        {content.map((e:string, i:number) => <p key={i} > {e} </p>)}

        <div className='__skills md:pr-56' >
           <ul className='grid grid-cols-2 space-y-2' >
              {skills.map((e: string, i: number) => (
                <li key={i} className='gap-1 flex items-center transition-all duration-300 hover:translate-x-[7px] select-none hover:text-sky-400' > <IoMdArrowDropright className='text-sky-400 text-xl' /> {e}</li> 
              ))}             
           </ul> 
        </div>

      </div>

    </motion.div>
  )
}

export default Left
