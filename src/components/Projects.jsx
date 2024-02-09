import React from "react"

import WorkImage from "../assets/projects/workImg.jpeg"
import BankApp from "../assets/projects/bank-app.png"
import TicTacToe from "../assets/projects/tictactoe.png"
import Library from "../assets/projects/library.png"
import MagicMatch from "../assets/projects/magic-match.png"

import HTML from "../assets/html.png"
import CSS from "../assets/css.png"
import Tailwind from "../assets/tailwind.png"
import JavaScript from "../assets/javascript.png"
import ReactImage from "../assets/react.png"

const Projects = () => {
  return (
    <section
      name="projects"
      className="w-full md:min-h-screen text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-[#0a192f] flex justify-center items-center"
    >
      <section className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <article className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Projects
          </h2>
          <p className="py-4">// Check out some of my recent work</p>
        </article>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grid Item */}
          <article className=" min-w-[300px] shadow-lg shadow-[#040c16] group rounded-md relative overflow-hidden">
            {/* Hover Effects */}
            <article className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex flex-col justify-center items-center duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-center text-gray-100 tracking-wider p-4">
                Modern Bank Application
              </h3>
              <div className="flex items-center justify-center gap-3">
                <img src={HTML} alt="html icon" className=" w-7" />
                <img src={Tailwind} alt="tailwind icon" className=" w-7" />
                <img src={ReactImage} alt="react icon" className=" w-7" />
              </div>
              <div className="pt-8 text-center flex justify-center items-center gap-8">
                <a href="https://jirigorcik.github.io/ModernBankApp/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JiriGorcik/ModernBankApp" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </article>
            <img
              src={BankApp}
              alt="Bank Application"
              className="block h-[250px] w-full object-cover"
            />
          </article>

          {/* Grid Item */}
          <article className=" min-w-[300px] shadow-lg shadow-[#040c16] group rounded-md relative overflow-hidden">
            {/* Hover Effects */}
            <article className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex flex-col justify-center items-center duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-center text-gray-800 tracking-wider p-4">
                Tic Tac Toe
              </h3>
              <div className="flex items-center justify-center gap-3">
                <img src={HTML} alt="html icon" className=" w-7" />
                <img src={CSS} alt="css icon" className=" w-7" />
                <img src={JavaScript} alt="javascript icon" className=" w-7" />
              </div>
              <div className="pt-8 text-center flex justify-center items-center gap-8">
                <a href="https://jirigorcik.github.io/TicTacToe/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-200 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JiriGorcik/TicTacToe" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-200 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </article>
            <img
              src={TicTacToe}
              alt="tic tac toe game"
              className="block h-[250px] w-full object-cover"
            />
          </article>
          {/* Grid Item */}
          <article className=" min-w-[300px] shadow-lg shadow-[#040c16] group rounded-md relative overflow-hidden">
            {/* Hover Effects */}
            <article className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex flex-col justify-center items-center duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-center text-gray-100 tracking-wider p-4">
                Library Project
              </h3>
              <div className="flex items-center justify-center gap-2">
                <img src={HTML} alt="html icon" className=" w-7" />
                <img src={Tailwind} alt="css icon" className=" w-7" />
                <img src={JavaScript} alt="javascript icon" className=" w-7" />
              </div>
              <div className="pt-8 text-center flex justify-center items-center gap-8">
                <a href="https://jirigorcik.github.io/Library-project/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JiriGorcik/Library-project" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </article>
            <img
              src={Library}
              alt="library project image"
              className="block h-[250px] w-full object-cover"
            />
          </article>

          {/* Grid Item */}
          <article className=" min-w-[300px] shadow-lg shadow-[#040c16] group rounded-md relative overflow-hidden">
            {/* Hover Effects */}
            <article className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 w-full h-full hover:backdrop-blur-md flex flex-col justify-center items-center duration-300 ease-in-out">
              <h3 className="text-2xl font-bold text-center text-gray-100 tracking-wider p-4">
                Magic Match
              </h3>
              <div className="flex items-center justify-center gap-2">
                <img src={HTML} alt="html icon" className=" w-7" />
                <img src={Tailwind} alt="tailwind icon" className=" w-7" />
                <img src={ReactImage} alt="react icon" className=" w-7" />
              </div>
              <div className="pt-8 text-center flex justify-center items-center gap-8">
                <a href="https://jirigorcik.github.io/Magic-Match/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/JiriGorcik/Magic-Match" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-gray-100 text-gray-700 font-bold text-lg hover:bg-gray-400 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </article>
            <img
              src={MagicMatch}
              alt="magic match image"
              className="block h-[250px] w-full object-cover"
            />
          </article>
          <div className=" min-w-[300px] shadow-lg shadow-[#040c16] group rounded-md overflow-hidden flex flex-col justify-center items-center">
             <h3>Ecommerce Website</h3>
             <h3>comming soon..</h3>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Projects
