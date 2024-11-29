import React from 'react'
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import SatriaNFT from '../assets/satriaNFT.jpg'
import PlayNPizza from "../assets/PlayNPizza.jpeg"
import Taskify from "../assets/Taskify.jpeg"
import HelloGram from "../assets/HelloGram.jpeg"
import LMS from "../assets/LMS.jpeg"
const Card = ({ img, title, code, demo }) => (
    <div className='group shadow-lg shadow-[#040c16] container rounded-md flex flex-col justify-center items-center mx-auto overflow-hidden relative h-64'>
        <img 
            src={img} 
            alt={title}
            className='w-full h-full object-contain' 
        />
        <div className='opacity-0 group-hover:opacity-100 absolute inset-0 w-full h-full flex flex-col justify-center items-center bg-gradient-to-t from-black/80 to-black/80'>
            <div className='text-3xl font-bold  text-white'>
                {title}
            </div>
            <div className='flex justify-center pt-4'>
                {demo?  <a href={demo} target='_blank'><button className='hover:bg-white hover:text-black mr-4 text-center items-center border-2 rounded-lg px-3 py-2 text-white'>Demo</button></a> : ""}
                <a href={code} target='_blank'><button className='hover:bg-white hover:text-black text-center items-center border-2 rounded-lg px-3 py-2 text-white'>Code</button></a>
            </div>
        </div>
    </div>
)



const Work = () => {
    return (
        <div name='work' className='px-[2rem] md:px-[4rem] lg:px-[10rem] pb-[20rem] pt-[6rem] mt-[10rem]'>

            <div>
                <p className='inline border-b-4 border-pink-600 font-bold text-4xl'>Work</p>
                <p className='my-4'>//Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <Card img={SatriaNFT} title ="SatriaNFT" code="https://github.com/HezekiahIvandi/SatriaNFT" demo="https://hezekiahivandi.github.io/SatriaNFT/"/>
                
                <Card img={Taskify} title ="Taskify" code="https://github.com/HezekiahIvandi/Taskify-Task-Management-App"/>
                <Card img={LMS} title ="Wikimedia-LMS" code="https://github.com/HezekiahIvandi/LMS-Belajar-Daring-Wikimedia-Indonesia"/>
                <Card img={HelloGram} title ="HelloGram" code="https://github.com/HezekiahIvandi/HelloGram"/>
                <Card img={PlayNPizza} title ="Play & Pizza" code="https://github.com/HezekiahIvandi/Play-and-Pizza"/>
                
            </div>

        </div>
  )
}

export default Work