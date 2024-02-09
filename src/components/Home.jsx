import React from "react"
import { HiArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <section
      name="home"
      className="w-full min-h-screen bg-gray-100 dark:bg-[#0a192f] flex justify-center items-center"
    >
      <article className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center h-full">
        <h3 className="text-pink-600 text-xl ml-4 mb-2">Hi my name is</h3>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-700  dark:text-[#ccd6f6]">
          Jiří Gorčík
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500 dark:text-[#8892b0]">
          I’m a Frontend Developer.
        </h2>
        <p className="text-gray-500 dark:text-[#8892b0] py-4 max-w-[700px]">
          I am a self-taught web developer. My goal is to work for a company
          that will allow me to improve and grow.
        </p>
        <div>
          <button className="text-black dark:text-white group border-2 border-gray-700 dark:border-white px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:text-white hover:border-pink-600">
            <Link to="projects" smooth={true} duration={500}>
              View Projects
            </Link>
            <span className=" group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </article>
    </section>
  )
}

export default Home
