import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "FastAPI" },
  { skill: "Express" },
  { skill: "Node" },
  { skill: "Django" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "MongoDB" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "TypeScript" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap CSS" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-3 pb-12 md:pt-16 md:pb-24">
        <h1 className="text-center font-bold text-5xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-4xl font-bold mb-6 md:text-center">
              Get to know me!
            </h1>
            <ul className="text-center text-2xl list-disc list-inside mb-6 space-y-10">
              <li className="mb-4">
                <span className="text-2xl font-bold">
                  Digitally Driven Entrepreneur:
                </span>{" "}
                Merging the art of digital creation with entrepreneurial zeal.
              </li>
              <li className="mb-4">
                <span className="font-bold">Craftsmanship Enthusiast:</span>{" "}
                Passion for tangible creations, coding, and engaging in outdoor
                activities.
              </li>
              <li className="mb-4">
                <span className="font-bold">Management Expertise:</span> Skills
                in optimizing processes, strategizing, and elevating customer
                satisfaction.
              </li>
              <li className="mb-4">
                <span className="font-bold">
                  Commitment to Growth:
                </span>{" "}
                Focused on efficiency, innovation, and contributing to
                forward-thinking companies.
              </li>
            </ul>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-4xl font-bold mb-6 text-center">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src={"/about-image.png"}
              alt=""
              width={600}
              height={600}
              className="hidden mt-8 md:block md:relative md:bottom-4 md:left-2 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
