import React from "react";
import devProfile from "../assets/images/devInfo/devProfile.jpg";
import ImageWithPlaceholder from "../components/ImageWithPlaceholder";

const DevContact = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-3 p-5 bg-white shadow-xl rounded-md">
        {/* <img className="w-32 rounded-full " src={devProfile} alt="" /> */}
        <ImageWithPlaceholder
          actualSrc={devProfile}
          alt="dev of the website"
          className="w-32 h-32 object-cover rounded-full"
        />
        <div className="text-center">
          <p>Fahim Ahammad</p>
          <p className="text-xs text-gray-500 dark:text-gray-300 ">
            Full-Stack Web Developer
          </p>
          <p>+880 1309 773 673</p>
          <p>writetofahimahammad@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default DevContact;
