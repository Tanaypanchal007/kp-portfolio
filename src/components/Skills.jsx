import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 100 },
    { name: "CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
  ];

  return (
    <>
      <section className="h-fit py-10 px-4 xl:px-5 bg-blue-100/20" id="skills">
        <div>
          <h1 className="text-4xl font-mono font-bold border-b-4 border-blue-100 w-[80px] pb-3 tracking-normal">
            Skills
          </h1>
          <p className="mt-6 text-lg xl:text-xl text-gray-700 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            debitis voluptatem, nulla culpa assumenda quaerat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6 mt-10">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4 w-full">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold text-black">
                    {skill.name}
                  </span>
                  <span className="text-sm font-semibold text-black">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-[#f3f9fc]  h-2">
                  <div
                    className="bg-[#1da1f2] h-2 "
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
