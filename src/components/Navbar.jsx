import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedinIn, FaFacebook} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll'


const Menu = ()=>(
    <>
            <li>
                <Link to="home"smooth={true}duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link to="about"smooth={true}duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link to="experience"smooth={true}duration={500}>
                    Experience
                </Link>
            </li>
            <li>
                <Link to="work"smooth={true}duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link to="contact"smooth={true}duration={500}>
                    Contact
                </Link>
            </li>
          
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleClick = () =>{
    toggleMenu ? setToggleMenu(false) : setToggleMenu(true)
    }
  return (
    
    <div className='fixed w-full bg-[#0a192f] text-white flex justify-end items-center px-5 py-4'>

            <div className='w-full'>
                <img src={Logo} className='w-14 ml-2 lg:ml-[-10px]'/>
            </div>

            <ul className='hidden w-[30rem] justify-between md:flex'><Menu/></ul>

        {/* Mobile */}
            <div  className="md:hidden z-10 cursor-pointer">
                    {toggleMenu ? <FaTimes onClick={handleClick}/> 
                                    :
                    <FaBars onClick={handleClick}/>}
            </div>
            
            {toggleMenu && (<ul className='mobile-menu'>
            <li>
                <Link onClick={handleClick} to="home"smooth={true}duration={500}>
                    Home
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="about"smooth={true}duration={500}>
                    About
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="experience"smooth={true}duration={500}>
                    Experience
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="work"smooth={true}duration={500}>
                    Work
                </Link>
            </li>
            <li>
                <Link onClick={handleClick} to="contact"smooth={true}duration={500}>
                    Contact
                </Link>
            </li>
            </ul>)}

        {/* Social media */}
        <ul className='hidden absolute lg:flex flex-col top-[10rem] left-0'>

            <li>
                <a href='https://www.linkedin.com/in/hezekiahivandi/' target="_blank" className='socmed-link bg-blue-600'>LinkedIn <FaLinkedinIn size={30}/></a>
            </li>
                
            <li>
                <a className='socmed-link bg-[#333333] ' href='https://github.com/HezekiahIvandi' target="_blank"> GitHub <FaGithub size={30}/></a>
            </li>
        
            <Link to="contact"smooth={true}duration={500}>
            <li>
                <a className='socmed-link bg-[#6fc2b0]' href='mailto:hezekiahivandi@gmail.com'  target="_top">Email <HiOutlineMail size={30}/></a>
                
            </li>
                </Link>
            <li>
                <a className='socmed-link bg-[grey]' href="CV_Hezekiah.pdf" download>Resume <BsFillPersonLinesFill size={30}/></a>
            </li>

            
        </ul>
        

    </div>
  )
}

export default Navbar