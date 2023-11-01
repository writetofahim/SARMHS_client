import React from "react";
import { Link } from "react-router-dom";
import school_1 from "../assets/images/school/school1.jpeg";

const PageTopBanner = ({ title }) => {
  return (
    <div
      className="print:hidden w-full bg-no-repeat bg-cover mt-[65px] "
      style={{
        // background: "url(https://www.cambrian.edu.bd/upload/1563426754.jpg)",
        background: `url(${school_1})`,
        backgroundPosition: "center",
      }}
    >
      <div className="w-full bg-gray-700 bg-opacity-60 ">
        <div className="py-16 max-w-[1200px] w-full mx-auto p-3">
          <h1 className="text-white text-3xl font-bold">{title}</h1>
          <div className="flex gap-3 text-white">
            <Link to={"/"}>Home</Link>
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTopBanner;
