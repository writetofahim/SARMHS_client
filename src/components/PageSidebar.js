import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const PageSidebar = ({ sectionName, links }) => {
  const [pending, setPending] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("admission/pending");
        if (res.status === 200) {
          setPending(res.data.count);
        }
      } catch (error) {
        // Handle any errors that occur during the request
      }
    };

    fetchData(); // Call the async function
  }, []);

  const activeClassName = "block py-2 px-3 bg-orange-300 text-white";
  const inactiveClassName =
    "block py-2 px-3 dark:bg-gray-600 bg-gray-200 hover:bg-orange-300 hover:text-white duration-200";
  return (
    <div className="print:hidden md:w-[25%] w-full">
      <h1 className="text-xl font-bold dark:text-gray-200">
        <span className="text-orange-300">{sectionName}</span>
      </h1>
      <div className="border-t border-2 w-20 mt-2 border-orange-300"></div>
      <div className="flex flex-col gap-3 mt-5">
        {links.map(({ id, to, title, subLink }, i) => (
          <div key={i} className="relative border">
            {/* {subLink ? (
              <div>
                <p className="block py-2 px-3 bg-gray-300 hover:bg-orange-300 hover:text-white duration-200">
                  {title}
                </p>
                <div className="ml-2 ">
                  {subLink.map((sl) => (
                    <NavLink
                      key={sl.id}
                      className={`${({ isActive }) =>
                        isActive ? activeClassName : inactiveClassName}`}
                      to={sl.to}
                    >
                      {sl.title}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : ( */}
            <NavLink
              className={({ isActive }) =>
                isActive ? activeClassName : inactiveClassName
              }
              to={to}
            >
              {title}
            </NavLink>
            {title === "Applications" ? (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex justify-center items-center">
                {pending}
              </span>
            ) : null}
            {/* )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSidebar;
