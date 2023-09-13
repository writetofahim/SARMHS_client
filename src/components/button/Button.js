import React from "react";

const Button = ({ label, onClick, color }) => {
  let buttonColorClass = "";

  switch (color) {
    case "green":
      buttonColorClass = "bg-green-500 hover:bg-green-600";
      break;
    case "blue":
      buttonColorClass = "bg-blue-500 hover:bg-blue-600";
      break;
    case "red":
      buttonColorClass = "bg-red-500 hover:bg-red-600";
      break;
    default:
      break;
  }

  return (
    <button
      className={`px-4 py-2 rounded-md text-white ${buttonColorClass} focus:outline-none focus:ring-2 focus:ring-opacity-50`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
