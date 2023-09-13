import React, { useEffect, useState } from "react";
import classIcon from "../assets/icons/class.svg";
// import classIcon from "../../assets/icons/class.svg";
import { studentData } from "../assets/data/studentData";
import staff from "../assets/icons/staff.svg";
import student from "../assets/icons/student.svg";
import teacher from "../assets/icons/teacher.svg";
import axiosInstance from "../utils/axiosInstance";

const AtaGlance = () => {
  const [numberOfTeachers, setNumberOfTeachers] = useState(0);
  const [numberOfStaffs, setNumberOfStaffs] = useState(0);

  useEffect(() => {
    axiosInstance
      .get("teachers")
      .then((res) => {
        setNumberOfTeachers(res.data.length);
      })
      .catch((error) => {
        // Handle the error here, e.g., by logging it or showing an error message to the user
        console.error("Error fetching teacher data:", error);
      });
  }, []);
  useEffect(() => {
    axiosInstance
      .get("staffs")
      .then((res) => {
        setNumberOfStaffs(res.data.length);
      })
      .catch((error) => {
        // Handle the error here, e.g., by logging it or showing an error message to the user
        console.error("Error fetching teacher data:", error);
      });
  }, []);
  const data = [
    {
      name: "Classes",
      number: "5",
      icon: classIcon,
    },
    {
      name: "Students",
      number: studentData.reduce((total, classInfo) => {
        return total + classInfo.maleStudents + classInfo.femaleStudents;
      }, 0),

      icon: student,
    },
    {
      name: "Teachers",
      number: numberOfTeachers || 0,
      icon: teacher,
    },
    {
      name: "Staff",
      number: numberOfStaffs || 0,
      icon: staff,
    },
  ];
  return (
    <div className=" h-full">
      <div className="h-full bg-white dark:bg-gray-700 rounded-md p-2 shadow-md">
        <div className="flex ">
          {/* <Fade bottom> */}
          {/* grid md:grid-cols-4 grid-cols-2grid md:grid-cols-4 grid-cols-2 */}
          <div className="flex flex-wrap justify-center mx-auto gap-2 my-3">
            {data.map(({ name, number, icon }, index) => (
              <div
                key={index}
                className="flex gap-2 border dark:border-gray-700 rounded p-3"
              >
                <img src={icon} className="w-20 h-20" alt="" />
                <div>
                  <p>{name}</p>
                  <p className="text-5xl font-extrabold text-center text-orange-300">
                    {number}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* </Fade> */}
        </div>
      </div>
    </div>
  );
};

export default AtaGlance;
