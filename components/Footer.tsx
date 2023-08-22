import React, { useState } from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import ContactModal from "./ContactModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevents scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Allows scrolling again
  };

  return (
    <>
      {isModalOpen && <ContactModal closeModal={closeModal} />}
      <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
          <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
            © 2023 Lee Seaver<a href="/" className="hover:underline"></a>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2 mb-1">
            <a
              href="https://github.com/LeeAaron702"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineGithub
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>

            {/* <a
            href="https://twitter.com/hqasmei"
            rel="noreferrer"
            target="_blank"
            >
            <AiOutlineTwitter
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
            />
          </a> */}

            <a
              href="https://www.linkedin.com/in/lee-aaron-s/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            <a href="#!" onClick={openModal}>
              <AiOutlineMail
                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                size={30}
              />
            </a>
            {/* <a
            href="https://www.youtube.com/channel/UCQBMkSDgbxDb8usMeXmOZyA"
            rel="noreferrer"
            target="_blank"
            >
            <AiOutlineYoutube
            className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
            size={30}
            />
          </a> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
