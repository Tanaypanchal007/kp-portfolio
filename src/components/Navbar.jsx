import Image from "next/image";
import profile from "../../public/images/profile-img.jpg";
import React from "react";

import {
  FaXTwitter,
  FaSkype,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import {
  IoHomeOutline,
  IoPersonOutline,
  IoPeopleOutline,
} from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { PiToolboxLight } from "react-icons/pi";
import { FaRegMessage } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <section className="fixed bg-navbar-100 w-full xl:w-[23%] lg:w-[25%] md:w-[30%] sm:w-[40%]  h-screen text-white overflow-auto">
        <nav>
          <Image
            src={profile}
            alt="Profile"
            width={150}
            height={150}
            className="object-cover object-top h-[150px] w-[150px] rounded-full border-4 border-gray-200/50 mb-3 flex mx-auto my-4"
          />
          <h1 className="text-center text-2xl font-mono my-3">
            Kaushik Panchal
          </h1>

          <div className="flex justify-center gap-2 mb-7 text-[24px]">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              className="bg-amber-200/10 p-2 rounded-full hover:bg-blue-100 transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              className="bg-amber-200/10 p-2 rounded-full hover:bg-blue-100 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="bg-amber-200/10 p-2 rounded-full hover:bg-blue-100 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="bg-amber-200/10 p-2 rounded-full hover:bg-blue-100 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="skype:live:.cid.your_skype_id"
              title="Skype"
              className="bg-amber-200/10 p-2 rounded-full hover:bg-blue-100 transition"
            >
              <FaSkype />
            </a>
          </div>

          <div className="flex px-7">
            <ul className="flex flex-col gap-6  text-xl xl:text-2xl xl:gap-8 font-mono font-light tracking-wider">
              <li className="flex gap-3 items-center">
                <IoHomeOutline />
                <a href="#home">Home</a>
              </li>
              <li className="flex gap-3 items-center">
                <IoPersonOutline />
                <a href="#about">About</a>
              </li>
              <li className="flex gap-3 items-center">
                <IoPersonOutline />
                <a href="#skills">Skills</a>
              </li>
              <li className="flex gap-3 items-center">
                <PiToolboxLight />
                <a href="#experiance">Experiance</a>
              </li>
              <li className="flex gap-3 items-center">
                <FaRegMessage />
                <a href="#services">Services</a>
              </li>
              <li className="flex gap-3 items-center">
                <IoPeopleOutline />
                <a href="#testimonials">Testimonials</a>
              </li>
              <li className="flex gap-3 items-center">
                <CiMail />
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
