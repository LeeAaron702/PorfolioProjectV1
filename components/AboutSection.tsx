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
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Based in Las Vegas, Nevada,{" "}
              <span className="font-bold">{"determination"}</span>,
              <span className="font-bold">{" drive"}</span>, and
              <span className="font-bold">{" adaptability"}</span> define my
              traits as a full-stack software developer.
            </p>
            <br />
            <p>
              After completing an Advanced Software Engineering Certificate at
              Hack Reactor, eading development teams became second nature,
              especially when it came to creating user-centric applications and
              enhancing application performance.
            </p>
            <br />
            <p>
              Before embracing the world of coding, various managerial roles
              were undertaken, optimizing business processes, rolling out
              innovative strategies, and elevating customer satisfaction. Such a
              blend of business experience with technical expertise offers a
              fresh perspective on software development.
            </p>
            <br />
            <p>
              Believing in{" "}
              <span className="font-bold text-teal-500">constant growth</span>{" "}
              and with an unwavering enthusiasm for new challenges in the tech
              realm, there is a steadfast commitment to drive innovation and
              contribute significantly to forward-thinking companies.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
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
