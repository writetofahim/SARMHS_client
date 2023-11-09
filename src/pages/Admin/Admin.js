import React, { useContext, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import PageSidebar from "../../components/PageSidebar";
import PageTopBanner from "../../components/PageTopBanner";
import { AuthContext } from "../../context/AuthContexts";

const Admin = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
        { id: "res2", href: "/results", name: "Results" },
      ],
    },
    {
      href: "/",
      name: "Facilities",
      subLink: [
        { id: "fac1", href: "/facilities/library", name: "Library" },
        { id: "fac1", href: "/facilities/lab", name: "Lab" },
        { id: "fac1", href: "/facilities/debate", name: "Debate" },
      ],
    },
    {
      href: "/",
      name: "Administration",
      subLink: [
        { id: "adm1", href: "/teachers", name: "Teachers" },
        { id: "adm1", href: "/members", name: "Managing Committee" },
      ],
    },
    { href: "/login", name: "Login" },
    { href: "/docs", name: "Documents" },
  ];

  const facilities = [
    { id: 1, title: "Applications", to: "/admin/applications" },
    { id: 2, title: "News", to: "/admin/news" },
    { id: 3, title: "Notice", to: "/admin/notice" },
    { id: 4, title: "Board Results", to: "/admin/board-results" },
    { id: 5, title: "Regular Results", to: "/admin/regular-results" },
    { id: 6, title: "Routines", to: "/admin/routines" },
    { id: 7, title: "Events", to: "/admin/events" },
    { id: 8, title: "Teachers", to: "/admin/teachers" },
    { id: 9, title: "Members", to: "/admin/members" },
    { id: 10, title: "Staffs", to: "/admin/staffs" },
    { id: 11, title: "Documents", to: "/admin/documents" },
  ];
  useEffect(() => {
    if (!user) {
      // User is not authenticated, navigate to the home page
      navigate("/");
    }
  }, [user, navigate]);

  const { pathname } = useLocation();
  const selected = facilities.find((item) => item.to === pathname) || {};
  return (
    <div className="">
      {user ? (
        <>
          <PageTopBanner title={selected?.title || "Admin"} />
          <div className="max-w-[1200px] w-full mx-auto p-3 md:flex gap-5">
            <PageSidebar sectionName={"Admin"} links={facilities} />
            <div className="p-4 w-full relative">
              <Outlet />
            </div>
          </div>
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default Admin;
