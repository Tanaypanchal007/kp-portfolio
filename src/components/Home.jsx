import Image from "next/image";
import React from "react";
import herobg from "../../public/images/hero-bg.jpg";

const Home = () => {
  return (
    <>
      <section className="h-[100vh] bg-gray-200 " id="home">
        <Image
          src={herobg}
          className="brightness-75 h-[100vh]  object-cover "
        />
      </section>
    </>
  );
};

export default Home;
