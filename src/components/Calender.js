import React, { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date.get);
  const [year, setYear] = useState(2020);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  const totalDaysInMonth = getDaysInMonth(
    date.getMonth() + 1,
    date.getFullYear()
  );
  const day = date.getDay();
  const newArray = Array.from({ length: day }, (_, i) => " ");
  for (let i = 1; i <= totalDaysInMonth; i++) {
    newArray.push(i);
  }
  const chunkSize = 7;
  let col = [];
  for (let i = 0; i < newArray.length; i += chunkSize) {
    const chunk = newArray.slice(i, i + chunkSize);
    col.push(chunk);
  }
  return (
    <div class="flex items-center pb-8 px-4">
      <div class="max-w-sm w-full shadow-lg">
        <div class="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div class="px-4 flex items-center justify-between">
            <span
              tabindex="0"
              class="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
            >
              {months[date.getMonth()]} {date.getFullYear()}
            </span>
            <div class="flex items-center">
              <button
                onClick={() =>
                  setDate(
                    new Date(
                      date.getFullYear(),
                      date.getMonth() - 1,
                      date.getDate()
                    )
                  )
                }
                aria-label="calendar backward"
                class="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                class="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                onClick={() =>
                  setDate(
                    new Date(
                      date.getFullYear(),
                      date.getMonth() + 1,
                      date.getDate()
                    )
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler  icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between pt-12 overflow-x-auto">
            <table class="w-full">
              <thead>
                <tr>
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <th key={day}>
                      <div class="w-full flex justify-center">
                        <p
                          class={`text-base font-medium text-center text-gray-800 dark:text-gray-100`}
                        >
                          {day}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {col.map((dt, i) => (
                  <tr className={dt + i}>
                    {dt.map((dtn, i2) => (
                      <td key={dtn + i2} class="">
                        <div
                          class={`px-2 py-2 cursor-pointer flex w-full justify-center items-center ${
                            date.getDate() === dtn &&
                            date.getMonth() === new Date().getMonth()
                              ? "bg-sky-400 w-8 h-8 text-white rounded-full"
                              : ""
                          }`}
                        >
                          {dtn}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
