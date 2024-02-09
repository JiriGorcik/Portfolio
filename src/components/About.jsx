import React from "react"

const About = () => {
  return (
    <section
      name="about"
      className="w-full min-h-[80vh] bg-gray-100 dark:bg-[#0a192f] text-gray-700 dark:text-gray-300 flex justify-center items-center"
    >
      <section className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full sm:text-center pb-8 pl-4">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            About
          </h2>
        </div>
        <article className="max-w-[600px] w-full sm:text-center flex flex-col gap-4 px-4">
          <div className=" text-4xl font-bold ">
            <p>Hi, I’m Jiří, nice to meet you.</p>
          </div>
          <div>
            <p className="leading-8 tracking-wide sm:text-lg">
              I live in Rýmařov in the Czech Republic. I graduated from the High
              School of School of Information Technology with a specialization
              in Graphics and Multimedia. After graduation I took a 3 month
              course on Full-stack Web Development. Afterwards, I expanded my
              knowledge in using the React library and the Tailwind CSS
              framework.
            </p>
          </div>
        </article>
      </section>
    </section>
  )
}

export default About
