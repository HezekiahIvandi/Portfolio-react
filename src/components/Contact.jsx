import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='flex flex-col px-[2rem] md:px-[4rem] lg:px-[10rem] mt-[25rem] pb-[15rem] pt-[5rem]'>
        <form method='POST' action="https://getform.io/f/744798fc-553d-4308-aa98-a2cd511tcfc2f">
            <div>
                <p className='text-4xl border-b-4 border-pink-600 inline'>Contact</p>
                <p className='py-4'>//Submit the form below or shoot me an email - hezekiahivandi@gmail.com</p>
               
            </div>
             <input className='flex w-full p-2 text-black' type='text' placeholder='Name' name='name'/>
             <input className='flex w-full my-2 p-2 text-black' type='email' placeholder='Email' name='email'/>
             
             <textarea className='flex w-full p-2 text-black' placeholder='Message' name="message" rows="10"></textarea>
             <button className='border-2 border-pink-600 mt-6 p-2 mx-auto flex hover:border-pink-600 hover:bg-pink-600 hover:text-black font-bold'>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact