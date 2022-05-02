import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Experience = () => {
  return (
    <div name='experience' className=' mb-[20rem] pt-[10rem] text-white px-[2rem] md:px-[4rem] lg:px-[10rem] mt-[30rem]'>
        <div>
            <p className='text-4xl font-bold border-b-4 inline border-pink-600'>Experience</p>
            <p className='py-[1rem] pb-7'>//These are the technologies i've worked with</p>
        </div>

        <div className='grid grid-cols-2 text-center gap-2 sm:grid-cols-4 sm:gap-4 lg:gap-6'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={HTML} className='w-20 mx-auto'/>
                <p className='my-4'>HTML</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={CSS} className='w-20 mx-auto'/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={JavaScript} className='w-20 mx-auto'/>
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={ReactImg} className='w-20 mx-auto'/>
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={Node} className='w-20 mx-auto'/>
                <p className='my-4'>NODE</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={FireBase} className='w-20 mx-auto'/>
                <p className='my-4'>FIREBASE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={AWS} className='w-20 mx-auto'/>
                <p className='my-4'>AWS</p>
            </div>
            
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img src={GitHub} className='w-20 mx-auto'/>
                <p className='my-4'>GITHUB</p>
            </div>
            
        </div>    
    </div>
  )
}

export default Experience