import React, { useEffect } from "react";
import { studentData } from "../../assets/data/studentData";
import student from "../../assets/images/student.png";
const Students = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" mx-auto dark:text-gray-400 p-4">
      <h1 className="text-center text-2xl customFont mb-5">Students</h1>
      <div className="relative  flex flex-col justify-center items-center">
        <img src={student} className="opacity-20 w-full md:w-[50%]" alt="" />
        <div className="absolute top-0  w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 justify-center gap-5">
            {studentData.map((sd, index) => (
              <div
                key={index}
                className=" backdrop-blur-[1px] bg-blue-200/20 hover:shadow-lg transition-all dark:border-gray-700 rounded p-4 flex flex-col items-center justify-center"
              >
                <p>
                  Class:{" "}
                  <span className="font-bold text-xl">{sd.className}</span>
                </p>
                <p>
                  Male Students:{" "}
                  <span className="font-bold">{sd.maleStudents}</span>
                </p>
                <p>
                  Female Students:{" "}
                  <span className="font-bold">{sd.femaleStudents}</span>
                </p>
                <p>
                  Total Students:{" "}
                  <span className="font-bold">
                    {sd.femaleStudents + sd.maleStudents}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
