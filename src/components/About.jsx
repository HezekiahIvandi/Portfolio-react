import React from 'react'

const About = () => {
  return (
    <div name='about' className=' mb-[20rem] pt-[20rem] md:px-[4rem] lg:px-[10rem] bg-[#0a192f] text-white px-[2rem]'>
        <div className='sm:text-center'>
            <p className='text-4xl border-b-4 inline border-pink-600 font-bold'>
                About</p></div>

        <div className='block sm:grid grid-cols-2 gap-4'>
            <div className='sm:text-right text-4xl font-bold my-7'>
                    Hi, i'm Hezekiah, nice to meet you.
                    Please take a look around.
            </div>

            <div className='sm:mt-8'>
                Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Ducimus corporis, necessitatibus aspernatur 
                obcaecati magni ratione nostrum tempore 
                consectetur reprehenderit optio eius deserunt 
                corrupti dignissimos nihil facilis animi sunt! Quidem, illum?
            </div>
        </div>


    </div>
  )
}

export default About