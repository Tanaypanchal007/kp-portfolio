import React from "react";
import { IoMdSend } from "react-icons/io";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";

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
            {/* Left side */}
            <div className="w-full xl:w-[45%] bg-off-white-100 shadow-md px-4 py-6">
              <div className="flex gap-3 items-center mb-5 xl:mb-10">
                <div className="bg-blue-100/30 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                  <CiLocationOn className="text-3xl text-blue-100" />
                </div>
                <div>
                  <h1 className="text-xl font-medium">Address</h1>
                  <p className="text-lg">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-5 xl:mb-10">
                <div className="bg-blue-100/30 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                  <IoCallOutline className="text-3xl text-blue-100" />
                </div>
                <div>
                  <h1 className="text-xl font-medium">Contact No</h1>
                  <p className="text-lg">Ahmedabad, Gujarat, India</p>
                </div>
              </div>
              <div className="flex gap-3 items-center mb-5 xl:mb-10">
                <div className="bg-blue-100/30 h-[50px] w-[50px] flex justify-center items-center rounded-full">
                  <CiMail className="text-3xl text-blue-100" />
                </div>
                <div>
                  <h1 className="text-xl font-medium">Email I'd</h1>
                  <p className="text-lg">Ahmedabad, Gujarat, India</p>
                </div>
              </div>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.4304894879115!2d72.56673087386923!3d23.117934912765485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8257b89c4287%3A0x3abeb33bc8781ba0!2sAnand%20Skylyf%2C%20Dharti%20Exotica%2C%20A-702%2C%20road%2C%20opposite%20Satyamev%20hospital%2C%20Chandkheda%2C%20Ahmedabad%2C%20Gujarat%20382424!5e0!3m2!1sen!2sin!4v1753546285538!5m2!1sen!2sin"
                  style={{ border: 0, width: "100%", height: "300px" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Right Side */}
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
