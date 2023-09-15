import React, { useContext, useEffect, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContexts";

const MobileNav = ({ isNavOpen, setIsNavOpen }) => {
  const [subLinkId, setSubLinkId] = useState("");
  const sidebarRef = useRef(null);

  const navItems = [
    { href: "/", name: "Home" },
    // { href: "/admission", name: "Admission" },
    {
      href: "/",
      name: "Academic",
      subLink: [
        { id: "aca1", href: "/academic/class-routine", name: "Class Routine" },
        { id: "aca2", href: "/", name: "Academic Rules" },
        { id: "aca3", href: "/", name: "Academic Calender" },
        { id: "aca4", href: "/", name: "Attendance Sheet" },
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
        console.log("outside clicked");
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
        ref={sidebarRef}
        className={`fixed backdrop-blur-sm bg-gray-300/50 text-white  z-50 w-full duration-500 ${
          !isNavOpen ? "opacity-0" : "opacity-100 "
        }`}
      >
        <div
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
                        onClick={() => {
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

          {/* <div
              onClick={() => setTheme(colorTheme)}
              className="mx-auto w-5 cursor-pointer "
            >
              {colorTheme === "dark" ? darkIcon : lightIcon}
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
