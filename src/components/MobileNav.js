import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContexts";

const MobileNav = ({ isNavOpen, setIsNavOpen, setTheme, colorTheme }) => {
  const [subLinkId, setSubLinkId] = useState("");
  const sidebarRef = useRef(null);

  const navItems = [
    { href: "/", name: "Home" },
    { href: "/admission", name: "Admission" },
    {
      href: "/",
      name: "Academic",
      subLink: [
        { id: "aca1", href: "/academic/class-routine", name: "Class Routine" },
        { id: "aca2", href: "/coming-soon", name: "Academic Rules" },
        { id: "aca3", href: "/coming-soon", name: "Academic Calender" },
        { id: "aca4", href: "/coming-soon", name: "Attendance Sheet" },
      ],
    },
    { href: "/students", name: "Students" },
    {
      href: "/",
      name: "Results",
      subLink: [
        { id: "res1", href: "/board-results", name: "Board Results" },
        { id: "res2", href: "/regular-results", name: "Regular Results" },
      ],
    },
    // {
    //   href: "/",
    //   name: "Facilities",
    //   subLink: [
    //     { id: "fac1", href: "/facilities/library", name: "Library" },
    //     { id: "fac1", href: "/facilities/lab", name: "Lab" },
    //     { id: "fac1", href: "/facilities/debate", name: "Debate" },
    //   ],
    // },
    {
      href: "/",
      name: "Administration",
      subLink: [
        { id: "adm1", href: "/teachers", name: "Teachers" },
        { id: "adm1", href: "/members", name: "Managing Committee" },
        { id: "adm1", href: "/staffs", name: "Staff" },
      ],
    },
    { href: "/docs", name: "Documents" },
    { href: "/admin", name: "Admin" },
    { href: "/login", name: "Login" },
  ];
  const { user, logout } = useContext(AuthContext);
  const handleSubMenu = (id) => {
    setSubLinkId(id);
    // e.stopPropagation();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event.target);
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div
        className={`fixed backdrop-blur-sm bg-gray-300/50 dark:bg-gray-200/70 text-white  z-50 w-full duration-500 ${
          !isNavOpen ? "opacity-0" : "opacity-100 "
        }`}
      >
        <div
          ref={sidebarRef}
          className={`pt-20 w-60 transition-transform ease-in-out duration-400 bg-gray-500/50 h-screen ${
            isNavOpen
              ? "translate-x-0 opacity-100"
              : "-translate-x-60 opacity-0"
          } lg:flex gap-6 dark:text-white md:p-0  md:mt-10 mt-0 mb-10`}
        >
          <div className="">
            {navItems.map((item, index) => (
              <div key={index}>
                {item?.subLink ? (
                  <div
                    className={`py-2 pl-3 pr-1 bg-gray-500/50 flex items-center justify-between xpb-3  cursor-pointer relative md:text-xl  text-base md:my-0 my-3`}
                  >
                    {item.name}
                    {item.subLink && item.subLink.length > 0 && (
                      <button
                        className=" pl-10 "
                        onClick={(e) => {
                          e.stopPropagation();
                          if (subLinkId === item.subLink[0].id) {
                            setSubLinkId(null);
                          } else {
                            handleSubMenu(item.subLink[0].id);
                          }
                        }}
                      >
                        {subLinkId === item.subLink[0].id ? (
                          <IoIosArrowUp className="text-xl" />
                        ) : (
                          <IoIosArrowDown className="text-xl" />
                        )}
                      </button>
                    )}
                  </div>
                ) : (
                  <>
                    {(user || item.name !== "Admin") && (
                      <Link
                        to={item.href}
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className={`py-2 pl-3 pr-1  flex items-center justify-between cursor-pointer relative md:text-xl text-base md:my-0 my-3 bg-gray-500/50`}
                      >
                        {item.name}
                        {item?.subLink && item?.subLink.length > 0 && (
                          <button
                            className=" pl-10 "
                            onClick={() => {
                              handleSubMenu(item?.subLink[0].id);
                            }}
                          >
                            {subLinkId === item?.subLink[0].id ? (
                              <IoIosArrowUp className="text-xl" />
                            ) : (
                              <IoIosArrowDown className="text-xl" />
                            )}
                          </button>
                        )}
                      </Link>
                    )}
                  </>
                )}
                <div className="">
                  {item.subLink?.map(({ name, href }, subIndex) => (
                    <Link
                      key={subIndex}
                      onClick={() => setIsNavOpen(!isNavOpen)}
                      to={href}
                      className={`pl-3 pb-3 mb-2 text-md  dark:text-blue-300 flex ${
                        subLinkId === item.subLink[0].id ? "block" : "hidden"
                      }`}
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            onClick={() => setTheme(colorTheme)}
            className="mx-auto w-5 cursor-pointer "
          >
            {colorTheme === "dark" ? darkIcon : lightIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
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
