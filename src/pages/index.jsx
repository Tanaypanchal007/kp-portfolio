"use client";

import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { FaBarsStaggered } from "react-icons/fa6";

import { React, useState } from "react";

const index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  return (
    <>
      <section className="flex flex-row h-screen gap-5">
        <div className="hidden xl:block xl:w-[22%] lg:w-[25%] md:w-[30%] sm:w-[40%]">
          <Navbar />
        </div>
        <div>
          <Home />
          <About />
        </div>
        <div className="xl:hidden fixed top-5 right-5 z-50 text-2xl cursor-pointer">
          <FaBarsStaggered onClick={handleOpen} />
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden fixed top-0 left-0 w-[100%]  h-screen  z-40  transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Navbar />
        </div>
      </section>
    </>
  );
};

export default index;
