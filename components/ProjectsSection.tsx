"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import {
  BsGithub,
  BsArrowUpRightSquare,
  BsFillFileEarmarkLock2Fill,
} from "react-icons/bs";
import ContactModal from "./ContactModal"; // Make sure this path is correct

const projects = [
  {
    name: "Daedalus AI Platform",
    description:
      "A nod to the ancient Greek innovator, who is celebrated for his unmatched craftsmanship, this AI-powered SaaS platform offers an all-in-one content creation experience tailored for user needs.",
    image: "/Daedalus.gif",
    link: "https://daedalus-xi.vercel.app/",
  },
  {
    name: "ProCo Customer Service QR System",
    description:
      "Integrated QR system to simplify product replacement, customer service and review process for 125+ products utilizing QR codes. Demo version does not contain Instant Replacement functionality.",
    image: "/ProcoQr.gif",
    link: "https://www.proco-qr.com/?data=%7B%22productTitle%22%3A%22Professor%20Color%20Re-Coded%20OEM%20Toner%20Cartridge%20Replacement%20for%20Xerox%20VersaLink%20C7020%20C7025%20C7030%20%7C%20106R03739%20-Extra%20High%20Yield%20Magenta%20(16%2C500%20Pages)%22%2C%22modelNumber%22%3A%22106R03739%22%2C%22shopifyLink%22%3A%22https%3A%2F%2Fwww.professorcolor.com%2Fproducts%2Fcopy-of-professor-color-re-coded-oem-toner-cartridge-replacement-for-xerox-versalink-c7020-c7025-c7030-106r03737-106r03738-106r03739-106r03740-extra-high-yield-4-pack-2%22%2C%22amazonASIN%22%3A%22B0914N1J3Z%22%2C%22ID%22%3A%227414766108840%22%2C%22pictureURL%22%3A%22https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1342%2F3593%2Fproducts%2Fc7020-M.jpg%3Fv%3D1651558869%22%7D",
  },
  {
    name: "LiLL-E Image Generator",
    description:
      "Leverage the power of OpenAi DALL-E to generate images based on provided prompts.",
    image: "/LiLL-E.gif",
    github: "https://github.com/LeeAaron702/LiLL-E_ImageGenerator",
    link: "https://lill-e.tech/",
  },
  {
    name: "Ledgered",
    description:
      "Inspired by the age-old ledger system, Ledgered modernizes financial tracking, combining intuitive data visualization and robust analytics.",
    image: "/Ledgered.gif",
    github: "https://github.com/LeeAaron702/Ledgered",
    link: "https://github.com/LeeAaron702/Ledgered",
  },
  {
    name: "Atmosphere",
    description:
      "Dynamic weather application delivering real-time data globally.",
    image: "/Atmosphere.gif",
    github: "https://github.com/LeeAaron702/Atmosphere",
    link: "https://github.com/LeeAaron702/Atmosphere",
  },
  {
    name: "Swift Summary ",
    description:
      "Simplified the reading experience by instantly condensing lengthy articles and PDFs with AI-driven summaries.",
    image: "/SwiftSummary.gif",
    github: "https://github.com/LeeAaron702/AiSummarizer",
    link: "https://swiftsummary.netlify.app/",
  },
  {
    name: "Tenacious Tracker",
    description:
      "Streamlined vehicle maintenance, tracking, and cost analysis, enhancing vehicle longevity.",
    image: "/TenaciousTracker.gif",
    github: "https://github.com/LeeAaron702/TenaciousTracker",
    link: "https://github.com/LeeAaron702/TenaciousTracker",
  },
  {
    name: "Cruise Control",
    description:
      "Cruise Control is a cutting-edge software solution designed for the vehicle service industry. It streamlines appointment scheduling, service, and technician management.",
    image: "/CruiseControl.gif",
    github: "https://github.com/LeeAaron702/CruiseControl",
    link: "https://github.com/LeeAaron702/CruiseControl",
  },
  {
    name: "CarCar",
    description:
      "Comprehensive dealership management, optimizing inventory and sales operations.",
    image: "/carcar.gif",
    github: "https://github.com/LeeAaron702/CarCar",
    link: "https://github.com/LeeAaron702/CarCar",
  },
];

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);

  const toggleProject = (idx: number) => {
    if (expandedProject === idx) {
      setExpandedProject(null);
    } else {
      setExpandedProject(idx);
    }
  };

  React.useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function to remove the style if the component is unmounted while the modal is still open
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  return (
    <section id="projects">
      <h1 className="my-5 text-center font-bold text-4xl">Projects</h1>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      <p className="text-center font-bold text-2xl">Please click to expand!</p>
      <p className="text-center text-sm">Please give GIFs a moment to load.</p>
      <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>

      <div className="flex flex-col space-y-20">
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
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.github ? (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      ) : (
                        <>
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                            onClick={() => setModalOpen(true)}
                            
                          />
                        <p className=" text-neutral-600 dark:text-neutral-400">
                            This Github Repo is private - Please contact for
                            more information.
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </SlideUp>
          </div>
        ))}
      </div>
      {modalOpen && <ContactModal closeModal={() => setModalOpen(false)} />}
    </section>
  );
};

export default ProjectsSection;
