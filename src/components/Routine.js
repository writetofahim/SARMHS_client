import React, { useState } from "react";

function ClassSchedule({ data }) {
  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (classInfo) => {
    setSelectedClass((prevSelectedClass) =>
      prevSelectedClass?.className === classInfo?.className ? null : classInfo
    );
  };

  return (
    <div className="  p-4">
      <table className="table-auto mx-auto w-full md:w-1/2 border-collapse border dark:border-gray-700">
        <thead>
          <tr>
            <th className="border dark:border-gray-700 p-1">Class Name</th>
            <th className="border dark:border-gray-700 p-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((classInfo) => (
            <tr key={classInfo._id}>
              <td className="border dark:border-gray-700 p-1 ">
                {classInfo.className}
              </td>
              <td className="border dark:border-gray-700 p-1 ">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4  rounded"
                  onClick={() => handleClassClick(classInfo)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedClass && (
        <div className="mt-4">
          <h2 className="md:text-2xl text-xl font-bold mb-2 text-center">
            Class {selectedClass.className} Schedule
          </h2>
          <table className="table-auto mx-auto border-collapse border-r border-l dark:border-gray-700">
            <thead>
              <tr>
                <th className="border dark:border-gray-700 p-2">Day</th>
                <th className="border dark:border-gray-700 p-2">Schedule</th>
              </tr>
            </thead>
            <tbody>
              {selectedClass.schedule.map((daySchedule) => (
                <tr key={daySchedule._id}>
                  <td className="dark:border-gray-700 border-b  border-r p-2">
                    {daySchedule.day}
                  </td>
                  <td
                    className={`dark:border-gray-700 border-b p-2 ${
                      window.innerWidth > 768 ? "flex" : ""
                    }`}
                  >
                    {window.innerWidth <= 768 ? (
                      <ul>
                        {daySchedule.hours.map((hour) => (
                          <li key={hour._id} className="dark:border-gray-700-b">
                            {hour.time}: {hour.sub}, Room {hour.room}, Teacher{" "}
                            {hour.teacher}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex space-x-2">
                        {daySchedule.hours.map((hour) => (
                          <div
                            key={hour._id}
                            className="text-center dark:border-gray-700 border-r pr-2"
                          >
                            <p>{hour.time}</p>
                            <p className="font-semibold text-orange-300">
                              {hour.sub}
                            </p>
                            <p>Room: {hour.room}</p>
                            <p>{hour.teacher}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ClassSchedule;
