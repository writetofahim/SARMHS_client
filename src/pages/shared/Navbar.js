import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContexts";
import useColorTheme from "../../hooks/useColorTheme";

const Navbar = ({ setIsNavOpen, isNavOpen }) => {
  const { user, logout } = useContext(AuthContext);
  const [colorTheme, setTheme] = useColorTheme();

  return (
    <div
      className={`border-general sticky top-0 z-50 border-b dark:border-gray-700  transition-colors duration-500  dark:text-white ${
        !isNavOpen
          ? "backdrop-blur-md  bg-slate-50/60 dark:bg-[#0B1120]/80 "
          : "bg-white dark:bg-gray-600"
      }`}
    >
      <div className=" max-w-[1400px] mx-auto ">
        {/* desktop */}
        <div className={` relative flex items-center justify-between h-16`}>
          {/* logo */}
          <div className="pl-5 flex items-center text-lg justify-between w-full">
            <div className="">
              <a className="" href="/">
                সলিমগঞ্জ আব্দুল রউফ মুসলিম উচ্চ বিদ্যালয়
              </a>
            </div>
            <div
              onClick={(e) => {
                setIsNavOpen(!isNavOpen);
                e.stopPropagation();
              }}
              className="lg:hidden block pr-5"
            >
              {isNavOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </div>
          </div>
          {/* nav */}
          <div className="pr-5 items-center lg:flex hidden font-semibold ">
            {/* home */}
            <div className="flex  flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 ">
              <NavLink
                className="flex items-center text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2  font-medium"
                to="/"
              >
                Home
              </NavLink>
            </div>
            {/* admission */}
            {/* <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400  ">
              <Link
                className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2  font-medium flex items-center"
                to="/admission"
              >
                Admission
              </Link>
            </div> */}
            {/* Academic */}
            <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 py-2">
              <div className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2 font-medium flex items-center">
                Academic
              </div>
              <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-12 left-0 w-44 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                <Link
                  className="hover:text-sky-400"
                  to="/academic/class-routine"
                >
                  Class Routine
                </Link>
                <Link className="hover:text-sky-400" to="/coming-soon">
                  Academic Rules
                </Link>
                <Link className="hover:text-sky-400" to="/coming-soon">
                  Academic Calender
                </Link>
                <Link className="hover:text-sky-400" to="/coming-soon">
                  Attendance Sheet
                </Link>
              </div>
            </div>
            {/* Students */}
            <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 py-2">
              <Link
                className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2 font-medium flex items-center"
                to="/students"
              >
                Students
              </Link>
              {/* <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-12 left-0 w-44 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                <Link className="hover:text-sky-400" to="/">
                  Class Schedule
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  Academic Rules
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  Academic Calender
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  Attendance Sheet
                </Link>
              </div> */}
            </div>
            {/* Results */}
            <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 py-2">
              <div className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2 font-medium flex items-center">
                Results
              </div>
              <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-12 left-0 w-44 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                <Link className="hover:text-sky-400" to="/board-results">
                  Board Results
                </Link>
                <Link className="hover:text-sky-400" to="/regular-results">
                  Regular Results
                </Link>
              </div>
            </div>
            {/* Facilities */}
            {/* <div className=" relative group flex flex-shrink-0 items-center  rounded-lg text-gray-400 py-2">
              <div className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2  font-medium  flex items-center">
                Facilities
              </div>
              <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-12 left-0 w-52 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                <Link className="hover:text-sky-400" to="/facilities/library">
                  Library
                </Link>
                <Link className="hover:text-sky-400" to="/facilities/lab">
                  Lab
                </Link>
                <Link
                  className="hover:text-sky-400"
                  to="/facilities/co-curricular"
                >
                  Co Curricular Activity{" "}
                </Link>
                <Link className="hover:text-sky-400" to="/facilities/debate">
                  Debate Club
                </Link>
              </div>
            </div> */}
            {/* Administration */}
            <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 py-2">
              <div className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2  font-medium flex items-center">
                Administration
              </div>
              <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-12 left-0 w-52 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                <Link className="hover:text-sky-400" to="/teachers">
                  Teachers
                </Link>
                <Link className="hover:text-sky-400" to="/members">
                  Managing Committee
                </Link>
                <Link className="hover:text-sky-400" to="/staffs">
                  Staff
                </Link>
              </div>
            </div>

            {/* Docs */}
            <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 py-2">
              <Link
                className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2  font-medium flex items-center"
                to="/docs"
              >
                Documents
              </Link>
              {/* <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-12 left-0 w-52 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                <Link className="hover:text-sky-400" to="/teachers">
                  Teachers
                </Link>
                <Link className="hover:text-sky-400" to="/members">
                  Managing Committee
                </Link>
                <Link className="hover:text-sky-400" to="/">
                  Staff
                </Link>
              </div> */}
            </div>

            {/* admin */}
            {user && (
              <div className="group relative flex flex-shrink-0 items-center  rounded-lg text-gray-400 hover:text-sky-400 py-2">
                <Link
                  className="text-slate-700 hover:bg-gray-800 hover:text-white dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200 rounded-md px-2 py-2  font-medium flex items-center"
                  to="/admin"
                >
                  Admin
                </Link>
              </div>
            )}

            {/* others */}
            <div className="flex items-center gap-3 border-l dark:border-gray-400 ml-3 pl-3">
              {/* theme */}
              <div
                onClick={() => setTheme(colorTheme)}
                className="flex flex-shrink-0 items-center cursor-pointer"
              >
                {colorTheme === "dark" ? (
                  <span className="text-gray-700">{darkIcon}</span>
                ) : (
                  <span className="text-yellow-300">{lightIcon}</span>
                )}
              </div>
              {/* Login */}
              <div
                className="text-white px-3 py-1
             flex flex-shrink-0 items-center dark:bg-[#38bdf8] bg-[#38bdf8]  rounded-full  "
              >
                <Link className="flex items-center" to="/login">
                  {user ? (
                    <div className="group relative">
                      {user.user}
                      <div className="hidden group-hover:flex hover:flex flex-col gap-3 bg-white  absolute top-6 -right-10 w-32 p-5 rounded-md shadow-lg border text-slate-700 dark:text-slate-400 text-sm">
                        <p
                          onClick={() => logout()}
                          className="hover:text-sky-400 cursor-pointer"
                        >
                          {" "}
                          Logout
                        </p>
                      </div>
                    </div>
                  ) : (
                    "Login"
                  )}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* mobile */}
      </div>
    </div>
  );
};

export default Navbar;

const lightIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
  </svg>
);

const darkIcon = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
  </svg>
);
