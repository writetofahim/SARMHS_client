/**
This is a React functional component called RecentWorks which renders a section of recent works. 
It imports the RecentWorksSlider component, which is a slider that displays each work item.
 */

import React from "react";
import RecentWorksSlider from "./RecentWorksSlider";

const RecentWorks = () => {
  return (
    <div className="w-full overflow-hidden  md:flex md:flex-col md:justify-center">
      <h3 className="text-4xl my-2 font-bold bg-gradient-to-r from-blue-400  to-orange-600 bg-clip-text text-transparent customFont text-center">
        Recent Events
      </h3>
      {/* p-3 md:p-5 w-full md:max-w-[1400px] self-center flex gap-10 flex-wrap items-center justify-center */}
      <div className="">
        <RecentWorksSlider />
      </div>
    </div>
  );
};

export default RecentWorks;
