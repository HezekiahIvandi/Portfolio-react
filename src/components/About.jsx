import React from 'react'

const About = () => {
  return (
    <div name='about' className=' mb-[20rem] pt-[20rem] md:px-[4rem] lg:px-[10rem] bg-[#0a192f] text-white px-[2rem]'>
        <div className='sm:text-center'>
            <p className='text-4xl border-b-4 inline border-pink-600 font-bold'>
                About</p></div>

        <div className='block sm:grid grid-cols-2 gap-4'>
            <div className='sm:text-right text-4xl font-bold my-7'>
            Hi, I'm Hezekiah. Welcome to my portfolio!
            </div>

            <div className='sm:mt-8'>
            I'm passionate about building innovative digital solutions that make a real impact. As a full-stack developer, I bring ideas to life through clean code and user-centered design. My experience spans from winning web development competitions to creating practical applications for real-world use cases. I thrive in collaborative environments and am always eager to tackle new technological challenges.
            </div>
        </div>


    </div>
  )
}

export default About