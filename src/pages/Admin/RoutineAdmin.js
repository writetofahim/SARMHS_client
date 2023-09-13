import React, { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import axiosInstance from "../../utils/axiosInstance";

const RoutineAdmin = () => {
  const [showRoutine, setShowRoutine] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [classId, setClassId] = useState("");
  const [classData, setClassData] = useState([]);
  const [dayId, setDayId] = useState("");
  const [classIndex, setClassIndex] = useState("");

  const handleClass = (id) => {
    setShowRoutine(!showRoutine);
    setClassId(id);
  };

  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get("routine").then((res) => {
      console.log("useEfflect", res.data);
      setIsLoading(false);
      setClassData(res.data);
    });
  }, []);

  const handleChange = (
    classId,
    index,
    dayIndex,
    hourIndex,
    field,
    value,
    dayId
  ) => {
    const updatedRoutines = [...classData];
    console.log(classId);
    // // Update the specific field for the selected routine
    updatedRoutines[index].schedule[dayIndex].hours[hourIndex][field] = value;
    console.log(updatedRoutines);
    // // Update the state with the edited routines
    setClassData(updatedRoutines);
    setDayId(dayId);
    setClassIndex(index);
  };

  const handleUpdate = () => {
    setIsLoading(true);
    axiosInstance
      .put(
        `routine/${classId}`,
        classData[classIndex].schedule.find((day) => day._id === dayId)
      )
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log("Hour updated:", response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error updating hour:", error);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="mt-20 ">
          <Loader />
        </div>
      ) : (
        <div>
          <h3 className="text-center font-semibold">Class Routines</h3>
          <div className=" flex flex-col items-center justify-center dark:text-white">
            {classData.map((cd, index) => (
              <div key={index} className="">
                <div
                  onClick={() => handleClass(cd._id)}
                  className={`border md:text-base text-sm dark:border-gray-700 flex hover:bg-blue-500 cursor-pointer hover:text-white ${
                    !showRoutine && "mb-1"
                  }`}
                >
                  <p className="w-10 md:w-12  dark:border-gray-700 text-center py-1">
                    -
                  </p>
                  <p className="w-16 md:w-20  border-l dark:border-gray-700 text-center py-1">
                    1st hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    2nd hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    3rd hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    4th hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    5th hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    6th hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    7th hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1">
                    8th hour
                  </p>
                  <p className="w-16 md:w-20 border-l dark:border-gray-700 text-center py-1 text-orange-300 hover:text-orange-200 font-bold">
                    Class {cd.className}
                  </p>
                </div>
                <table
                  className={`${
                    classId === cd._id && showRoutine ? "block mb-1" : "hidden"
                  }`}
                >
                  <tbody className="flex">
                    <div>
                      {cd.schedule.map((day, dayIndex) => (
                        <tr
                          key={dayIndex}
                          className="text-center md:text-base text-sm"
                        >
                          <td className="border dark:border-gray-700 w-10 md:w-12 py-1">
                            {day.day}
                          </td>
                          {day.hours.map((hour, hourIndex) => (
                            <td
                              key={hourIndex}
                              className="border dark:border-gray-700 w-16 md:w-20 py-1"
                            >
                              <form
                                action=""
                                //   onSubmit={(e) => handleUpdate(hour._id, e)}
                              >
                                <input
                                  className="focus:outline-none text-center w-14 md:w-16 font-semibold text-orange-300"
                                  onChange={(e) =>
                                    handleChange(
                                      cd._id,
                                      index,
                                      dayIndex,
                                      hourIndex,
                                      "sub",
                                      e.target.value,
                                      day._id
                                    )
                                  }
                                  name="sub"
                                  type="text"
                                  value={hour.sub}
                                />
                                <input
                                  className="focus:outline-none text-center w-14 md:w-16"
                                  onChange={(e) =>
                                    handleChange(
                                      cd._id,
                                      index,
                                      dayIndex,
                                      hourIndex,
                                      "time",
                                      e.target.value,
                                      day._id
                                    )
                                  }
                                  name="time"
                                  type="text"
                                  value={hour.time}
                                />
                                <input
                                  className="focus:outline-none text-center w-14 md:w-16"
                                  onChange={(e) =>
                                    handleChange(
                                      cd._id,
                                      index,
                                      dayIndex,
                                      hourIndex,
                                      "room",
                                      e.target.value,
                                      day._id
                                    )
                                  }
                                  name="room"
                                  type="text"
                                  value={hour.room}
                                />
                                <input
                                  className="focus:outline-none text-center w-14 md:w-16"
                                  onChange={(e) =>
                                    handleChange(
                                      cd._id,
                                      index,
                                      dayIndex,
                                      hourIndex,
                                      "teacher",
                                      e.target.value,
                                      day._id
                                    )
                                  }
                                  name="teacher"
                                  type="text"
                                  value={hour.teacher}
                                />
                              </form>
                              {/* <p className="font-semibold text-orange-300">
                              {hour.sub}
                            </p>
                            <p>{hour.time}</p>
                            <p>{hour.room}</p>
                            <p>{hour.teacher}</p> */}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </div>
                    <div className="flex justify-center items-center m-3 ">
                      <button
                        onClick={handleUpdate}
                        className="py-1 px-2 bg-blue-400 rounded text-white"
                      >
                        Update
                      </button>
                    </div>
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default RoutineAdmin;
