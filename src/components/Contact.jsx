import React from "react";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <section
        className="min-h-screen py-5 px-2 xl:px-5 bg-blue-100/5 "
        id="contact"
      >
        <div>
          <h1 className="text-4xl font-mono font-bold border-b-4 border-blue-100 w-[120px] pb-3 tracking-normal">
            Contact
          </h1>
          <p className="mt-5 xl:mt-5 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            exercitationem quaerat aspernatur explicabo dicta itaque?
          </p>

          <div className="mt-10 flex flex-col xl:flex-row gap-5">
            <div className="w-full xl:w-[45%] bg-off-white-100 shadow-md px-4 py-6">
              s
            </div>
            <div className="w-full xl:w-[55%] bg-off-white-100 shadow-md px-4 py-6 rounded">
              <form action="">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="font-mono text-xl">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="border-[1px] border-black py-3 px-3 font-mono  focus:outline-none focus:border-blue-500 focus:bg-blue-100/5"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="" className="font-mono text-xl">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="border-[1px] border-black py-3 px-3 font-mono  focus:outline-none focus:border-blue-500 focus:bg-blue-100/5"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="" className="font-mono text-xl">
                    Your Number
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Your Number"
                    className="border-[1px] border-black py-3 px-3 font-mono  focus:outline-none focus:border-blue-500 focus:bg-blue-100/5"
                  />
                </div>
                <div className="flex flex-col gap-2 mt-5">
                  <label htmlFor="" className="font-mono text-xl">
                    Your Message
                  </label>
                  <textarea
                    cols={30}
                    rows={5}
                    type=""
                    placeholder="Enter Your Message"
                    className="border-[1px] border-black py-3 px-3 font-mono  focus:outline-none focus:border-blue-500 focus:bg-blue-100/5"
                  />
                </div>
                <div>
                  <button className="w-full mt-5 bg-blue-500 text-white py-3 px-4 font-mono rounded hover:bg-blue-600 transition-colors cursor-pointer flex justify-center text-center items-center gap-2 font-2xl">
                    Send Message <IoMdSend className="text-2xl" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
