import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] 
    h-screen text-white flex flex-col justify-center md:px-[4rem] lg:px-[15rem] px-[2rem] '>
      <p className='text-pink-600'>Hi, my name is</p>
      <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Hezekiah Ivandi</h1>
      <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
      <p className='text-[#8892b0] py-3'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem neque magni voluptate similique hic vero vitae laboriosam assumenda 
        architecto velit ducimus nostrum impedit ratione harum, debitis facilis, accusantium in?
      </p>
      <Link to="work"smooth={true}duration={500}>
        <button className='group w-[7.9rem] border-2 flex items-center px-3 py-4 hover:bg-pink-600'>
          View work
           <span  className='ml-[9px] group-hover:rotate-90 group-hover:duration-300'><HiArrowNarrowRight/></span>
          
        </button>
        </Link>
    </div>
  )
}

export default Home