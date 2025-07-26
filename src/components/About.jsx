import React from "react";
import Image from "next/image";
import profileImg from "../../public/images/profile-img.jpg";

const About = () => {
  return (
    <>
      <section className="h-fit bg-gray-50 py-10 px-3 xl:pl-3" id="about">
        <div>
          <h1 className="text-4xl font-mono font-bold border-b-4 border-blue-100 w-[80px] pb-3 tracking-normal">
            About
          </h1>
          <p className="mt-5 xl:mt-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            nesciunt quas similique. Aliquid fugiat quisquam nostrum a, modi
            velit maiores dolorum ipsum? Nobis mollitia est accusantium delectus
            animi tenetur saepe.
          </p>

          <div className="mt-10 flex flex-col xl:flex-row gap-5">
            <div className="w-[100%] xl:w-[35%]">
              <Image
                src={profileImg}
                alt="Profile Image"
                className="w-full max-w-[300px] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-[100%] xl:w-[65%] flex flex-col gap-3">
              <h1 className="text-3xl font-medium font-mono">
                Business Development Manager
              </h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
                delectus, necessitatibus minus repudiandae harum vel blanditiis
                aut veritatis maiores corrupti suscipit dolorum tempora
                temporibus hic, excepturi iure nobis nesciunt inventore quis,
                doloremque voluptate officiis expedita quod animi. Eaque, fuga?
                Sed explicabo sunt architecto nihil eos illo dicta, porro
                repudiandae aspernatur voluptatum sint cum distinctio iste, in
                ad tenetur voluptate debitis! Fugiat tenetur earum possimus cum
                nemo. Nostrum recusandae atque perferendis incidunt, voluptatem
                vero necessitatibus placeat facilis assumenda natus officiis
                repellendus velit eos minus earum rem qui ullam voluptate quis
                debitis, a quidem porro? Voluptatibus, nulla quidem iure ipsam
                laudantium minus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
