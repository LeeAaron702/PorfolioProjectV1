import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "FastAPI" },
  { skill: "Django" },
  { skill: "SQL" },
  { skill: "NoSQL" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "TypeScript" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap CSS" },
  { skill: "Docker" },
  { skill: "Git" },
  { skill: "GitHub" },
]

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
              Hi, my name is Lee and I am a{" "}
              <span className="font-bold">{"determined"}</span>,
              <span className="font-bold">{" driven"}</span>, and
              <span className="font-bold">{" adaptable"}</span> full-stack software developer based in Las Vegas, Nevada.
            </p>
            <br />
            <p>
            Recently, I completed an Advanced Software Engineering Certificate at Hack Reactor, where I led development teams in creating user-centric applications and optimizing application performance. 
            </p>
            <br />
            <p>
            Prior to my coding career, I held various managerial positions where I optimized business processes, implemented innovative strategies, and improved customer satisfaction. This business experience coupled with my tech skills allows me to bring a unique perspective to software development.
            </p>
            <br />
            <p>
              I believe in{" "}
              <span className="font-bold text-teal-500">
                constant growth
              </span>{" "}
              and I am always excited to tackle new challenges in the technology sphere. I am eager to use my skills to make a significant impact in a forward-thinking company.

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
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection