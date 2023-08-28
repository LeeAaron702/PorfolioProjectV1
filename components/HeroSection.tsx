"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"
import ContactModal from './ContactModal'; 

const HeroSection = () => {
  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
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
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 pt-16 pb-3 sm:py-5 md:pt-20 md:flex-row md:space-x-4 md:text-left">
      <div className="md:mt-2 md:w-1/2">
            <Image  src={"/Headshot.jpg"} alt="" width={300} height={300} className="rounded-full shadow-2xl"/>
        </div>
        <div className="md:mt-2 md:w-3/5">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Lee.</h1>
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Full Stack Developer & AI Engineer</h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
              Based in Las Vegas, NV, I specialize in building{" "}
            <span className="font-semibold text-teal-600">
            efficient, scalable, and user-friendly{" "}
            </span>
            web applications.
            My passion lies in crafting software that empowers businesses to reach their full potential.
          </p>  
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>  
          <button 
        onClick={() => setModalOpen(true)} 
        className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-700 ml-5">
        Contact Me
      </button>   
           </div>
        </div>

        <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
        </div>
        {modalOpen && <ContactModal closeModal={() => setModalOpen(false)} />}

    </section>
  )
}

export default HeroSection