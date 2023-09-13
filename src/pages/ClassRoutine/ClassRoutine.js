import React, { useEffect, useState } from "react";
import Routine from "../../components/Routine";
import Loader from "../../components/loader/Loader";
import axiosInstance from "../../utils/axiosInstance";

const ClassRoutine = () => {
  const [showRoutine, setShowRoutine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [classId, setClassId] = useState("");
  const [classData, setClassData] = useState([]);
  const handleClass = (id) => {
    setShowRoutine(!showRoutine);
    setClassId(id);
  };
  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get("routine").then((res) => {
      // console.log(res.data);
      setIsLoading(false);
      setClassData(res.data);
    });
  }, []);
  // const classData = [
  //   {
  //     id: 1,
  //     className: 6,
  //     hours: [
  //       {
  //         firstHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },

  //   {
  //     id: 2,
  //     className: 7,
  //     hours: [
  //       {
  //         firstHour: [
  //           {
  //             sub: "Eng",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Math",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ict",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     className: 8,
  //     hours: [
  //       {
  //         firstHour: [
  //           {
  //             sub: "Eng",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Math",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //       {
  //         secondHour: [
  //           {
  //             sub: "Ict",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "Ban",
  //             time: "10:00",
  //             room: "101",
  //             teacher: "RI",
  //           },
  //           {
  //             sub: "",
  //             time: "",
  //             room: "-",
  //             teacher: "",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  return (
    <>
      {isLoading ? (
        <div className="mt-20 ">
          <Loader />
        </div>
      ) : (
        <div className="">
          <Routine data={classData} />
        </div>
      )}
    </>
  );
};

export default ClassRoutine;
