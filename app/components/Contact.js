import React from 'react';

export const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="bg-white shadow-md mx-auto mt-12 rounded-lg w-[96%] "
      >
        <div className="text-center py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Contact Me</h2>
          <p className="text-lg text-gray-700 mb-8">
            Feel free to reach out if you'd like to collaborate on a project or just say hi!
          </p>
          <form
            className="max-w-xl mx-auto bg-gray-100 rounded-lg p-6 shadow-md"
            action="#"
            method="POST"
          >
            <div className="mb-4">
              
              <input
                type="text"
                id="name"
                className="outline-none w-full   rounded-lg p-2"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              
              <input
                type="email"
                id="email"
                className="outline-none w-full  rounded-lg p-2"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              
              <textarea
                id="message"
                className="resize-none outline-none w-full  rounded-lg p-2"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact