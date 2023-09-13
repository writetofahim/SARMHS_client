import React from "react";
import { Link } from "react-router-dom";

import wave from "../../assets/images/wave.jpg";
const Footer = () => {
  return (
    //bg-transparent  transition-colors duration-500 dark:text-white
    <footer className="md:h-72 h-[80vh] relative  z-40   ">
      <img
        className="h-full w-full object-cover opacity-30"
        src={wave}
        alt=""
      />
      {/* elements */}
      <div className=" absolute top-0 w-full md:h-full h-full  flex md:flex-row flex-col gap-5 justify-evenly">
        {/* address */}
        <div className=" my-auto backdrop-blur-sm bg-blue-400/10 px-3 py-2 flex flex-col items-center justify-centerx h-52 md:rounded-lg ">
          <p className="text-xl items-center">Our Address</p>
          <div className="text-center items-center">
            <p className="mt-3">
              <span className="font-bold ">Location: </span>Salimganj,
              Nabinagar, Brahmanbaria
            </p>
            <p>
              <span className="font-bold">Mobile: </span>+880170011001
            </p>
            <p>
              {" "}
              <span className="font-bold">Email: </span>admission@sarmhs.edu.bd
            </p>
          </div>
        </div>
        {/* links */}
        <div className="my-auto backdrop-blur-sm bg-blue-400/10 px-3 py-2 flex flex-col items-center justify-centerx h-52 md:rounded-lg">
          <h3 className="text-xl items-center">Useful Links</h3>
          <ul className="mb-3">
            <li className="hover:text-sky-400 ">
              <a
                href="http://dhakaeducationboard.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                মাধ্যমিক ও উচ্চমাধ্যমিক শিক্ষা বোর্ড, ঢাকা
              </a>
            </li>
            <li className="hover:text-sky-400 ">
              <a
                href="http://www.bmeb.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ড
              </a>
            </li>
            <li className="hover:text-sky-400 ">
              <a href="http://www.dpe.gov.bd/" target="_blank" rel="noreferrer">
                প্রাথমিক শিক্ষা অধিদপ্তর
              </a>
            </li>

            <li className="hover:text-sky-400 ">
              <a
                href="http://www.bteb.gov.bd/"
                target="_blank"
                rel="noreferrer"
              >
                বাংলাদেশ কারিগরি শিক্ষা বোর্ড
              </a>
            </li>
          </ul>
        </div>
        {/* dev */}
        <div className="my-auto backdrop-blur-sm bg-blue-400/10 px-3 py-2 flex flex-col items-center justify-center h-52 md:rounded-lg">
          <p className="text-xs">Developed by:</p>

          <div className="text-center">
            <p>Fahim Ahammad</p>
            <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">
              Full-Stack Developer
            </p>
            <Link
              to="/dev-contact"
              className="bg-sky-400 px-3 py-2 rounded-full text-sm mt-1 hover:bg-sky-500 focus:ring-4"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
      {/* <p>
        Copyright ©2013 - 2023 <a href="/">Akanagor SESDP Model High School</a>. All Rights Reserved
      </p> */}
    </footer>
  );
};

export default Footer;
