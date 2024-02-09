import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"

import { FaBars, FaTimes, FaGithub, FaLinkedin, FaRegMoon  } from "react-icons/fa"
import { LuSun } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"

import LogoImage from "../assets/logo.png"

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false)
  const [theme, setTheme] = useState(null)
  
  useEffect(() => {
    if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])
  
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      
    }
  }, [theme])
  
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }
  
  const hadleClick = () => setMobileNav((prevNav) => (prevNav = !prevNav))

  return (
    <section className="fixed w-full h-20 flex justify-between items-center px-4 bg-white text-gray-800 dark:bg-[#091529] dark:text-gray-300 z-30">
      <div>
        <img src={LogoImage} alt="Logo Image" style={{ width: "100px" }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="mx-4 cursor-pointer">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="mx-4 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>

        <button className="mr-8 ml-5" onClick={handleThemeSwitch}>
           {theme === "dark" ? <FaRegMoon size={18}/> : <LuSun size={18} />} 
        </button>
      </ul>

      {/* Hamburger */}
      <div onClick={hadleClick} className="md:hidden z-10 cursor-pointer">
        {mobileNav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          mobileNav
            ? "absolute top-0 left-0 w-full h-screen text-gray-800 bg-gray-100 dark:bg-[#0a192f] dark:text-gray-300 flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="my-6 text-4xl cursor-pointer">
          <Link onClick={hadleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer">
          <Link onClick={hadleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer">
          <Link onClick={hadleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer">
          <Link onClick={hadleClick} to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="my-6 text-4xl cursor-pointer">
          <Link onClick={hadleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <article className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 relative">
            <a
              className="flex justify-between px-4 items-center w-full h-full text-gray-300 absolute"
              href="https://www.linkedin.com/in/ji%C5%99%C3%AD-gor%C4%8D%C3%ADk/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] relative">
            <a
              className="flex justify-between px-4 items-center w-full h-full text-gray-300 absolute"
              href="https://github.com/JiriGorcik"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#53a08f] relative">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between px-4 items-center w-full h-full text-gray-300 absolute cursor-pointer"
            >
              Email
              <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-40 h-16  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] relative">
            <a
              className="flex justify-between items-center px-4 w-full h-full text-gray-300 absolute"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </article>
    </section>
  )
}

export default Navbar
