import React from "react";

const Notice = ({ title, date, description }) => {
  return (
    <div className="px-5 h-[calc(100vh-64px)] mt-20 text-center">
      <h1 className="text-xl font-semibold border-b pb-1">{title}</h1>
      <h3>{date}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Notice;
