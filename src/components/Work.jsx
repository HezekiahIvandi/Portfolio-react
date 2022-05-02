import React from 'react'
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';

const Card =()=>(
    <>
    <div style={{backgroundImage: `url(${WorkImg})`}} className='group shadow-lg shadow-[#040c16] container rounded-md flex flex-col justify-center items-center mx-auto content-div'>

<div className='opacity-0 group-hover:opacity-100'>


   
       <div className='text-4xl font-bold block'>
           React JS Application
       </div>

       <div className='flex justify-center pr-[1rem] pt-[2rem]'>
           <a><button className='hover:bg-white hover:text-black mr-4 text-center items-center border-2 rounded-lg px-3 py-2'>Demo</button></a>
           <a><button className='hover:bg-white hover:text-black text-center items-center border-2 rounded-lg px-3 py-2'>Code</button></a>
      </div>

  </div> 
 

</div>
    </>
)
const Work = () => {
    return (
        <div name='work' className='px-[2rem] md:px-[4rem] lg:px-[10rem] pb-[20rem] pt-[6rem] mt-[10rem]'>

            <div>
                <p className='inline border-b-4 border-pink-600 font-bold text-4xl'>Work</p>
                <p className='my-4'>//Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card/>
                <Card />
                
            </div>

        </div>
  )
}

export default Work