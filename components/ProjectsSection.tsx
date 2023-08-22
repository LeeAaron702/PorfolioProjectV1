"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [

  {
    name: "LiLL-E Image Generator",
    description:
      "LiLL-E Image Generator is a full-stack web application that leverages the power of OpenAi DALL-E to generate images based on provided prompts. ",
    image: "/LiLL-E.gif",
    github: "https://github.com/LeeAaron702/LiLL-E_ImageGenerator",
    link: "https://lill-e.tech/",
  },
  {
    name: "Ledgered",
    description:
      "Ledgered is a financial tracking application that provides an intuitive interface for tracking transactions, products, and key performance indicators (KPIs).",
    image: "/Ledgered.gif",
    github: "https://github.com/LeeAaron702/Ledgered",
    link: "https://github.com/LeeAaron702/Ledgered",
  },
  {
    name: "Atmosphere",
    description:
      "Atmosphere is a web-based application that allows users to get real-time weather data for any city around the world.",
    image: "/Atmosphere.gif",
    github: "https://github.com/LeeAaron702/Atmosphere",
    link: "https://github.com/LeeAaron702/Atmosphere",
  },
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
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProject = (idx: number) => {
      if (expandedProject === idx) {
          setExpandedProject(null);
      } else {
          setExpandedProject(idx);
      }
  };


    return (
    <section id="projects">
      <h1 className="my-5 text-center font-bold text-4xl">
        Projects
      </h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <p className="text-center font-bold text-2xl">
        Please click to expand!
      </p>
      <p className="text-center text-sm">
        Please give GIFs a moment to load.
      </p>
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-100px 0px -100px 0px">
              <h1
                className="text-4xl text-center font-bold mb-6 cursor-pointer"
                onClick={() => toggleProject(idx)}
              >
                {project.name}
              </h1>
              {expandedProject === idx && (
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={2000}
                        height={2000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
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
              )}
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection