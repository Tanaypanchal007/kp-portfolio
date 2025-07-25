"use client";

import About from "@/components/About";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      {/* Desktop + Mobile Layout */}
      <main className="grid grid-cols-1 xl:grid-cols-[23%_1fr] h-screen relative">
        {/* Sidebar */}
        <div className="hidden xl:block h-screen">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className=" h-screen">
          <Home />
          <About />
        </div>

        {/* Mobile Menu Button */}
        <div className="xl:hidden fixed top-5 right-5 z-50 text-2xl cursor-pointer">
          {open ? (
            <IoClose onClick={handleOpen} />
          ) : (
            <FaBarsStaggered onClick={handleOpen} />
          )}
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`xl:hidden fixed top-0 left-0 w-[80%] h-screen z-50 bg-navbar-100 shadow-lg transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Navbar />
        </div>

        {/* Optional Overlay on mobile */}
        {open && (
          <div
            className="xl:hidden fixed inset-0 bg-black/70 z-40"
            onClick={handleOpen}
          ></div>
        )}
      </main>
    </>
  );
};

export default Index;
