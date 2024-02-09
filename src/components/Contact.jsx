import React from "react"

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full h-screen bg-gray-100 text-gray-700 dark:bg-[#0a192f] dark:text-gray-300 flex justify-center items-center p-4"
    >
      <form action="https://getform.io/f/fe11d39d-0b2f-4229-b7ba-7d5f0a4f3190" method="POST" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <h3 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Contact
          </h3>
          <p className="py-4">// Submit the form below or shoot me an email - jirigorcik@seznam.cz </p>
        </div>

        <input className="bg-gray-200 dark:bg-[#ccd6f6] p-2 rounded-md outline-none" type="text" placeholder="Name" name="name" required maxLength={50} />
        <input className="my-4 p-2 bg-gray-200 dark:bg-[#ccd6f6] rounded-md outline-none" type="email" placeholder="Email" name="email" maxLength={50} required/>
        <textarea className="bg-gray-200 dark:bg-[#ccd6f6] p-2 max-h-[420px] min-h-[140px] rounded-md outline-none" placeholder="Message" name="message" rows="10" required></textarea>
        <button className="text-black dark:text-white border-2 border-gray-700 dark:border-white hover:bg-pink-600 hover:text-white hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let’s Collaborate</button>
      </form>
    </section>
  )
}

export default Contact
