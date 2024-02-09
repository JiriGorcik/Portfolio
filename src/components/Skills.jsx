import React from "react"

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Tailwind from "../assets/tailwind.png"
import JavaScript from "../assets/javascript.png"
import ReactImage from "../assets/react.png"
import GitHub from "../assets/github.png"

const Skills = () => {
  return (
    <section
      name="skills"
      className="w-full min-h-screen bg-gray-100 text-gray-700 dark:bg-[#0a192f] dark:text-gray-300 flex justify-center items-center"
    >
      <section className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <article>
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </h2>
          <p className="py-4">// These are the technologies I’ve worked with</p>
        </article>

        <section className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <article className="shadow-md shadow-[#040c16] p-4 hover:scale-110 duration-500 select-none">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <h3 className="my-4">HTML</h3>
          </article>
          <article className="shadow-md shadow-[#040c16] p-4 hover:scale-110 duration-500 select-none">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <h3 className="my-4">CSS</h3>
          </article>
          <article className="shadow-md shadow-[#040c16] p-4 hover:scale-110 duration-500 select-none">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <h3 className="my-4">Tailwind</h3>
          </article>
          <article className="shadow-md shadow-[#040c16] p-4 hover:scale-110 duration-500 select-none">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="Javascript icon"
            />
            <h3 className="my-4">Javascript</h3>
          </article>
          <article className="shadow-md shadow-[#040c16] p-4 hover:scale-110 duration-500 select-none">
            <img className="w-20 mx-auto" src={ReactImage} alt="React icon" />
            <h3 className="my-4">React</h3>
          </article>
          <article className="shadow-md shadow-[#040c16] p-4 hover:scale-110 duration-500 select-none">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <h3 className="my-4">GitHub</h3>
          </article>
        </section>
      </section>
    </section>
  )
}

export default Skills
