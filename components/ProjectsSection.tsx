import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Swift Summary ",
    description:
      "Swift Summary is a tool that utilizes OpenAI ChatGPT to summarize article links and parse PDF data.",
    image: "/SwiftSummary.gif",
    github: "https://github.com/LeeAaron702/AiSummarizer",
    link: "https://swiftsummary.netlify.app/",
  },
  {
    name: "Tenacious Tracker",
    description:
      "Tenacious Tracker is a dynamic, single-page, web-based application that provides users with a seamless solution to manage, track, and analyze their vehicle maintenance, fuel consumption, and associated costs.",
    image: "/TenaciousTracker.gif",
    github: "https://github.com/LeeAaron702/TenaciousTracker",
    link: "https://github.com/LeeAaron702/TenaciousTracker",
  },
  {
    name: "Cruise Control",
    description: "Cruise Control is a cutting-edge software solution designed for the vehicle service industry. It streamlines appointment scheduling, service, and technician management.",
    image: "/CruiseControl.gif",
    github: "https://github.com/LeeAaron702/CruiseControl",
    link: "https://github.com/LeeAaron702/CruiseControl",
  },
  {
    name: "CarCar",
    description:
      "CarCar is a comprehensive dealership management system designed to streamline inventory, service center, and sales operations for automobile dealerships. ",
    image: "/carcar.gif",
    github: "https://github.com/LeeAaron702/CarCar",
    link: "https://github.com/LeeAaron702/CarCar",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection