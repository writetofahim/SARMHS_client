import React from "react";
import vice_principal from "../../assets/images/teacher/vice_principal1.jpg";

const Chairman = () => {
  return (
    <div className="px-5 h-[calc(100vh-64px)] mt-20 mb-4 overflow-x-scroll flex flex-col  items-center">
      <img
        className="rounded-sm h-60 object-cover object-top"
        src={vice_principal}
        alt=""
      />
      <div className="text-center h-40">
        <h3 className="mt-2 text-xl font-semibold text-sans">Rafiqul Islam</h3>
        <div className=" text-sm mb-2">Chairman</div>
        <p className="mb-4 text-left dark:text-gray-400">
          It is my pleasure to extend a warm welcome to you on behalf of
          Akanagar SESDP Model High School. As the Chairman of this exceptional
          organization, I am delighted to introduce you to our digital
          platform—a window into the heart and soul of our mission.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          Our website serves as more than just a virtual space; it's a
          reflection of our values, accomplishments, and the aspirations that
          drive us forward.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          We believe that our success is intertwined with the relationships
          we've cultivated along the way. To our esteemed supporters,
          collaborators, and advocates, your trust and encouragement have been
          our guiding light. You've stood by us as we've scaled heights and
          overcome challenges, and for that, we are immensely grateful.
        </p>
        <p className="mb-4 text-left dark:text-gray-400">
          Thank you for visiting our digital home. We look forward to
          connecting, sharing, and continuing our journey of impact together.
        </p>
      </div>
    </div>
  );
};

export default Chairman;
