import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import PageSidebar from "../../components/PageSidebar";
import PageTopBanner from "../../components/PageTopBanner";

const Facilities = () => {
  const facilities = [
    { id: 1, title: "Library", to: "/facilities/library" },
    { id: 2, title: "Lab", to: "/facilities/lab" },
    {
      id: 3,
      title: "Co-curricular Activities",
      to: "/facilities/co-curricular",
    },
    // { id: 4, title: "Debate Club", to: "/facilities/debate" },
  ];
  const { pathname } = useLocation();
  const selected = facilities.find((item) => item.to === pathname) || {};
  return (
    <>
      <PageTopBanner title={selected?.title || "Facilities"} />
      <div className="max-w-[1200px] w-full mx-auto p-3 md:flex gap-5">
        <PageSidebar sectionName={"Facilities"} links={facilities} />
        <Outlet />
      </div>
    </>
  );
};

export default Facilities;
